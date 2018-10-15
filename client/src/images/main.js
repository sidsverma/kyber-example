function renderLoanList(loans) {
    var content = $("#wrapper").children("div.content");
    var row;
    for (var i = 0; i < loans.length; i++) {
        if (i % 4 === 0) {
            row = $("<div>", { class: "row" });
            row.appendTo(content);
        }
        var loan = view.createLoan(loans[i]);
        row.append(loan);
    }
}

function filterLoansBasedOnCategory(loans){
    var lns = [];
    var stateValue = view.getParameterByNameForPage("state");
    if (!!!stateValue || stateValue === "all") {
        lns = removeLoansWithNewState(loans);
    } else if (stateValue === "my") {
        for (var i=0; i < loans.length; i++) {
            if (loans[i].borrower == app.getCurrentAccount() || loans[i].lender == app.getCurrentAccount()) {
                lns.push(loans[i]);
            }
        }
    } else {
        var states = findStateFromStateValue(stateValue)
        if (!!states) {
            for (var i=0; i < loans.length; i++) {  
                for (var j=0; j < states.length; j++) {
                    if(loans[i].state.toNumber() == states[j]) {
                        lns.push(loans[i]);
                    }
                }
            }  
        }
    }

    return lns;
}

function removeLoansWithNewState(loans) {
    return loans.filter((loan) => {
        return loan.state.toNumber() != 0;
    });
}

function findStateFromStateValue(stateValue) {
    switch(stateValue) {
        case "new":
            //return [0, 1];
            return [1];
        case "funded":
            return [2, 3];
        case "completed":
            return [4, 5];
        case "defaulted":
            return [6];
        case "cancelled":
            return [7];
        case "disputed":
            return [8];
        default:
            return [-1];
    }
}

function renderAside(loanCategories) {
    var navigation = $("#navigation");
    var aside = view.createAside(loanCategories);
    navigation.append(aside);
}

view.showLoading();

$(window).load(() => {
    if (typeof web3 !== "undefined") {
        var loans = app.fetchAllLoans();
        loans.then((loans) => {
            loans.reverse();
            renderLoanList(filterLoansBasedOnCategory(loans));
            renderLoanNotifications(loans);
        })
        .then(() => {
            return app.findAllLoanCategoriesCount();
        })
        .then((loanCategories) => {
            renderAside(loanCategories);
            var netName = app.findEthereumNetName();

            $("#ethNetConfig").find("span:first").text(netName.toUpperCase());

            if (netName === "mainnet") {
                netName = "";
            } else {
                $("#ethNetConfig").find("a").prop("href", "https://" + netName + ".etherscan.io/");
            }
        })
        .then(() => {
            return app.getCurrentAccountEthBalance();
        })
        .then((balance) =>{
            var netName = app.findEthereumNetName();
            if (netName === "kovan") {
                var aside = $("#navigation");
                var balPanel = view.getAccBalancePanelForAside(balance);
                aside.append(balPanel);
            }
        })
        .then(() => {
            view.stopLoading();
        })
        .then(() =>{
            var netName = app.findEthereumNetName();
            if (netName === "kovan") {
                app.getCurrentAccountTokenBalance(app.fetchContractAddresses().erc20_TFT)
                .then((balance) => {
                    var tokenBalDiv = $("#tokenBal");
                    var balPanel = view.getAccTestTokenBalancePanelForAside(balance);
                    tokenBalDiv.append(balPanel);
                })
                .then(() => {
                    $("#navigation").on("click", "#getTokens", () => {
                        $.post( "https://faucet.getnuo.com/getTokens", "address=" + app.getCurrentAccount())
                        .done(function(data) {
                            $("#getTokensResp").html(data.msg);
                        })
                        .fail(function(data) {
                            $("#getTokensResp").html(data.error.msg);
                        });
                    });
                })
                .catch((e) => {
                    ga("send", "exception", {
                        "exDescription": jsonifyError(e),
                        "exFatal": false
                    });
                    console.log(e);
                });
            }
        })
        .catch((e) => {
            ga("send", "exception", {
                "exDescription": jsonifyError(e),
                "exFatal": false
            });
            view.redirectError500();
            console.log(e);
        });
    }
});

function renderLoanNotifications(loans) {
    var alertsList = $("#alerts");
    for(var i = 0; i < loans.length; i++) {
        alerts = getLoanNotification(loans[i]);
        for(var j =0; j < alerts.length; j++) {
            var alertItem = `<li>
            <a href="loan_detail.html?loanAddr=${loans[i].address}">
                <div class="text-success">${alerts[j]}</div>
                <div class="small text-muted">${loans[i].address}</div>
            </a>
            </li>`;
            alertsList.append(alertItem);
        }
    }

    if ($("#alerts li").length > 0 ) {
        $("#alertsNo").text($("#alerts li").length);
    }

    if ($("#alerts li").length === 0 ) {
        alertsList.append(`<li>
        <a href="#">
            No new actions
        </a>
        </li>`);
    }
}

function getLoanNotification(loan) {        
    var state = loan.state.toNumber();
    var alertsArray = [];

    if(state == 0 && loan.isCurrentAccBorrower) {
        alertsArray.push("Deposit " + loan.collAmt.div((web3.toBigNumber(10)).pow(loan.collTokenDecimal)) + " " + loan.collTokenSymbol + " to activate your loan request");
    }

    if (state == 2 && loan.isCurrentAccBorrower && !loan.ethAllowed.borrower.isZero()) {
        alertsArray.push("Congrats! Your loan of " + web3.fromWei(loan.ethAllowed.borrower, "ether") + " ETH has been funded. <br/>Withdraw now!");
    }

    if (state == 6 && loan.isCurrentAccBorrower && !loan.ethAllowed.borrower.isZero()) {
        alertsArray.push("Withdraw loan of " + web3.fromWei(loan.ethAllowed.borrower, "ether") + " ETH even <br/>though the loan is defaulted");
    }

    if ((state == 3) && loan.isCurrentAccBorrower && !loan.instPaid.eq(loan.instLen)) {
        var now = new Date();
        var nowInEpoch = web3.toBigNumber(Math.round(now.getTime() / 1000));
        var installDue = loan.states[2].add(((loan.instPaid.add(1)).times(loan.termPerInst)));
        
        if ((installDue.minus(nowInEpoch).toNumber() < 3 * (86400)) && (installDue.minus(nowInEpoch).toNumber() > 0)) {
            alertsArray.push("Your installment of " + web3.fromWei(loan.calcInsts[loan.instPaid.toNumber()], "ether") + " ETH" 
            + " is due in " + (installDue.minus(nowInEpoch)).div(86400).toFixed(2) + " days");
        }
    }

    if ((state == 3 || state == 4 || state == 6) && loan.isCurrentAccBorrower && !loan.tokensAllowed.borrower.isZero()) {
        alertsArray.push("Collateral amount of " + loan.tokensAllowed.borrower.div((web3.toBigNumber(10)).pow(loan.collTokenDecimal)) + " " + loan.collTokenSymbol + " has been released. <br/>Withdraw now!");
    }

    if ((state == 3 || state == 4 || state == 5 || state ==6) && loan.isCurrentAccLender && !loan.ethAllowed.lender.isZero()) {
        alertsArray.push("The borrower has repaid " + web3.fromWei(loan.ethAllowed.lender, "ether") + " ETH. <br/>Withdraw now!");
    }
    
    if (state == 6 && loan.isCurrentAccLender && !loan.tokensAllowed.lender.isZero()) {
        alertsArray.push("Collateral amount of " + loan.tokensAllowed.lender.div((web3.toBigNumber(10)).pow(loan.collTokenDecimal)) + " " + loan.collTokenSymbol
            + "<br/> has been released due to default. Withdraw now!");
    }

    return alertsArray;
}
