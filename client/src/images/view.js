var view=function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.i=function(a){return a},b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=55)}({55:function(a,b){'use strict';function c(a){var b=e('state');return!!b||(b='all'),b===a?'active':''}function d(){$('#loader').css('display','block')}function e(a,b){b||(b=window.location.href);a=a.replace(/[\[\]]/g,'\\$&');var c=new RegExp('[?&]'+a+'(=([^&#]*)|&|#|$)'),d=c.exec(b);return d?d[2]?decodeURIComponent(d[2].replace(/\+/g,' ')):'':null}function f(a){return`
    ${a.calcInsts.map((b,c)=>`
    <tr>
        <td>${c+1}</td>
        <td>Ξ ${web3.fromWei(b,'ether').toFixed(8)} <span> ($${q(web3.fromWei(b,'ether'))})</span></td>
        <!--
        <td>
            <span class="pie">${c+1}/${a.instLen}</span>
        </td>
        -->
        <td>
            ${g(function(b){var c=a.instTimestamp[b];return!!c?c:0}(c))}
        </td>
        <td>
            ${g(function(b){var c=a.states[2];if(!!!c||0==c.toNumber())return 0;var d=a.termPerInst.times(b+1);return c=c.plus(d),c}(c))}
        </td>
        <td>
            ${function(b){var c=a.state.toNumber(),d=`
                <button id="payInst" type="button" class="btn w-xxs btn-success">
                    Pay
                </button>
                `;return 3==c&&b==a.instPaid.toNumber()&&a.isCurrentAccBorrower?d:''}(c)}
        </td>
        <td style="font-size:20px;">
        ${function(b){var c=`<i class="fa fa-check-circle text-success"></i>`,d=`<i class="fa fa-exclamation-circle text-navy"></i>`;return b<a.instPaid.toNumber()?c:d}(c)}
        </td>
    </tr>
        `).join('')}
    `}function g(a){if(0===a)return'-';var b=new Date(0);b.setUTCSeconds(a);var c=b.getUTCDate(),d=b.getUTCMonth()+1,e=b.getUTCFullYear(),f=b.getUTCHours(),g=b.getUTCMinutes(),h=b.getUTCSeconds();return c+'-'+d+'-'+e+'<br/>'+f+':'+g+':'+h+' GMT'}function h(a){if(0===a)return'-';var b=new Date(0);return b.setUTCSeconds(a),b.toUTCString()}function i(a){return a.tokenApproval.greaterThanOrEqualTo(a.collAmt)?'disabled':''}function j(a){return a.tokenApproval.greaterThanOrEqualTo(a.collAmt)?'':'disabled'}function k(a){var b=a.state.toNumber();return 0==b?'':'disabled'}function l(a){var b=a.state.toNumber();return 0===b?'hgreen':1===b?'hgreen':2===b?'hyellow':3===b?'hyellow':4===b?'hnavyblue':5===b?'hnavyblue':6===b?'hred':7===b?'horange':8===b?'hreddeep':'hgreen'}function m(a){var b=a.state.toNumber();return 0===b?'label-success':1===b?'label-success':2===b?'label-warning':3===b?'label-warning':4===b?'label-primary':5===b?'label-primary':6===b?'label-danger':7===b?'label-warning2':8===b?'label-danger2':'label-success'}function n(a){var b=a.state.toNumber();return 0===b?'NEW':1===b?'NEW':2===b?'FUNDED':3===b?'FUNDED':4===b?'COMPLETED':5===b?'COMPLETED':6===b?'DEFAULTED':7===b?'CANCELLED':8===b?'DISPUTED':'UNK'}function o(a){var b=a.collTokenSymbol;return'TFT'===b?'images/omisego.png':'TVT'===b?'images/zerox.png':'OMG'===b?'images/omisego.png':'ZRX'===b?'images/zerox.png':'REP'===b?'images/augur.jpeg':'GNT'===b?'images/golem.svg':'TRX'===b?'images/tron.jpg':'ZIL'===b?'images/zil.jpeg':'VEN'===b?'images/vechain.png':'BAT'===b?'images/bat.png':'AE'===b?'images/ae.png':'BTM'===b?'images/bytom.jpeg':'WTC'===b?'images/walton.jpeg':'DGD'===b?'images/digix.jpeg':'IOST'===b?'images/iost.jpeg':'BNT'===b?'images/bancor.png':'STORJ'===b?'images/storj.png':'BNB'===b?'images/bnb.png':'ICX'===b?'images/icx.png':'KNC'===b?'images/knc.png':'SNT'===b?'images/snt.png':'MANA'===b?'images/mana.png':'LRC'===b?'images/lrc.png':'ELF'===b?'images/elf.png':'REQ'===b?'images/req.png':'FUN'===b?'images/fun.png':'QSP'===b?'images/qsp.png':'DNT'===b?'images/dnt.png':'QKC'===b?'images/qkc.png':'NCASH'===b?'images/ncash.png':'POWR'===b?'images/powr.png':'CVC'===b?'images/cvc.png':'BLZ'===b?'images/blz.png':'ENG'===b?'images/eng.png':'ICN'===b?'images/icn.png':'PPT'===b?'images/ppt.png':'STORM'===b?'images/storm.jpeg':'LOOM'===b?'images/loom.png':'AION'===b?'images/aion.png':'MCO'===b?'images/mco.jpg':'LINK'===b?'images/link.png':'SALT'===b?'images/salt.jpeg':'CND'===b?'images/cnd.png':'WAN'===b?'images/wan.jpg':'TUSD'===b?'images/tusd.jpg':'BRD'===b?'images/brd.png':'NPXS'===b?'images/npxs.jpeg':'CAS'===b?'images/cas.png':'DAI'===b?'images/dai.jpeg':'DROP'===b?'images/drop.jpg':'FSN'===b?'images/fsn.png':'MKR'===b?'images/mkr.png':'NAS'===b?'images/nas.png':'PAY'===b?'images/pay.jpeg':'RHOC'===b?'images/rhoc.jpeg':'images/test.png'}function p(){var a=web3.version.network,b='local.';return b='1'===a?'':'3'===a?'ropsten.':'4'===a?'rinkeby.':'42'===a?'kovan.':'5777'===a?'local.':'local.',b}function q(a){var b=r();return b?(b=web3.toBigNumber(b),a.times(b).toFixed(1)):0}function r(){return s}Object.defineProperty(b,'__esModule',{value:!0}),b.createLoan=function(a){return`
    <div class="col-lg-3">
        <a href="loan_detail.html?loanAddr=${a.address}">
            <div class="hpanel ${l(a)} contact-panel">
                <div class="panel-body">
                    <span class="label ${m(a)} pull-right">${n(a)}</span>
                    <br/>
                    <div>
                        <img alt="logo" class="img-circle m-b" src=${o(a)} style="display: inline-block;width: 60px;height: 60px;">
                        <div style="display: inline-block;font-weight: 600px;font-size: 18px;margin-left: 10px;" class="text-muted m-b-xs">
                            ${function(a){return 15<a.collTokenName.length?a.collTokenName.substr(0,15):a.collTokenName}(a)}
                        </div>
                    </div>
                    <div style="display:inline-block;">
                        <h3 style="color: #62cb31;margin-top: 12%;">Ξ ${web3.fromWei(a.debtAmt,'ether').toFixed(6)}</h3>
                        <div class="text-muted font-bold m-b-xs">Loan Amount<span style="font-size:11px;"> ($${q(web3.fromWei(a.debtAmt,'ether'))})</span></div>
                    </div>
                    <span class="${function(){return a.isCurrentAccBorrower?'fa-arrow-down text-danger':a.isCurrentAccLender?'fa-arrow-up text-success':''}(a)} fa pull-right font-light" style="padding-top:48px;font-size:12px;">
                    </span>
                    <!--
                    <span class="pull-right" style="padding-top:48px;font-size: 10px;
                    font-weight: 500;
                    color: #9d9fa2;
                    text-transform: uppercase;">
                    ${function(){return a.isCurrentAccBorrower?'BORROWER':a.isCurrentAccLender?'LENDER':''}(a)}
                    </span>
                    -->
                </div>
                <div class="panel-footer contact-footer">
                    <div class="row">
                        <div class="col-md-4 border-right"> <div class="contact-stat" style="font-size:10px;"><span>INTEREST</span> <strong>${a.premiumPerct}%</strong></div> </div>
                        <div class="col-md-4 border-right"> <div class="contact-stat" style="font-size:10px;"><span>TENURE</span> <strong>${a.termPerInst*a.instLen/86400} Days</strong></div> </div>
                        <div class="col-md-4"> <div class="contact-stat" style="font-size:10px;"><span>COLLATERAL</span>
                            <strong>${a.collAmt.div(web3.toBigNumber(10).pow(a.collTokenDecimal)).toFixed(1)}  ${a.collTokenSymbol}
                            </strong>
                        </div> </div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    `},b.createAside=function(a){return`
      <ul class="nav" id="side-menu">
        <li class= "${c('all')}">
          <a href="loans.html?state=all">
            <span class="nav-label">All Loans</span>
            <span class="label label-default pull-right">${a.totalCount}</span>
          </a>
        </li>
        <li class= "${c('my')}">
          <a href="loans.html?state=my">
            <span class="nav-label">My Loans</span>
            <span class="label label-info pull-right">${a.myCount}</span>
          </a>
        </li>
        <li class= "${c('new')}">
          <a href="loans.html?state=new">
            <span class="nav-label">New</span>
            <span class="label label-success pull-right">${a.newCount}</span>
          </a>
        </li>
        <li class= "${c('funded')}">
          <a href="loans.html?state=funded">
            <span class="nav-label">Funded</span>
            <span class="label label-warning pull-right">${a.fundedCount}</span>
          </a>
        </li>
        <li class= "${c('completed')}">
          <a href="loans.html?state=completed">
            <span class="nav-label">Completed</span>
            <span class="label label-primary pull-right">${a.completedCount}</span>
          </a>
        </li>
        <li class= "${c('defaulted')}">
          <a href="loans.html?state=defaulted">
            <span class="nav-label">Defaulted</span>
            <span class="label label-danger pull-right">${a.defaultCount}</span>
          </a>
        </li>
        <li class= "${c('cancelled')}">
          <a href="loans.html?state=cancelled">
            <span class="nav-label">Cancelled</span>
            <span class="label label-warning2 pull-right">${a.cancelCount}</span>
          </a>
        </li>
        <!--
        <li class= "${c('disputed')}">
          <a href="loans.html?state=disputed">
            <span class="nav-label">Disputed</span>
            <span class="label label-danger2 pull-right">${a.disputedCount}</span>
          </a>
        </li>
        -->
      </ul>
    `},b.getAccBalancePanelForAside=function(a){return`
    <div class="m-l-xl">
        <div class="m-b-lg">
            <img class="m-b-md" src="images/metamask-fox.png"></img>
            <h3 style="float:right;margin-top:0px;">MetaMask</h3>
        <div/>
        
        <div>
            ETH Balance<br/>
        </div>
        <h4 class="text-success" style="margin-top:0px;">
        Ξ ${Math.round(100*web3.fromWei(a,'ether'))/100}<span style="font-size: 10px;"></span>
        <span style="font-size:11px;"> ($${q(web3.fromWei(a,'ether'))})</span></div>
        </h4>

        <div id="tokenBal">
        </div>
    </div>
    `},b.getAccTestTokenBalancePanelForAside=function(a){return`
    <div class="m-t-md">
        Token Balance
        <i id="getTokens" class="text-success fa fa-plus-circle" style="font-size:20px;"></i>
    </div>
    <h4 class="text-success" style="margin-top:0px;">
        ${a.div(web3.toBigNumber(10).pow(18)).toFixed(4)}<span style="font-size: 10px;"> TFT</span>
    </h4>
    <p id="getTokensResp" class="small text-warning">
    </p>
    <p class="small  text-muted font-light" style="margin-top:20px;">
        Note: You can request test funds once in every 6 hours
    </p>
    <p class="small  text-muted font-light" style="margin-top:10px;">
        Get upto 5 ETH from this
        <a class="text-success" href="https://gitter.im/kovan-testnet/faucet" target="_blank">
        kovan faucet
        </a>
    </p>
    `},b.createDepositPanel=function(a){return`
    <div class="hpanel hgreen contact-panel">
        <div class="panel-body">
            <div style="margin-top: 3%;display: block;min-height: 80px;">
                <div style="display: inline-block;vertical-align: middle;float: left;margin-left: 3%;">
                    <img alt="logo" class="img-circle m-b" src=${o(a)} style="display: inline-block;width: 60px;height: 60px;">    
                    <div style="display: inline-block;font-weight: 600px;font-size: 18px;margin-left: 10px;" class="text-muted m-b-xs">
                        ${a.collTokenName}
                    </div>
                </div>
                <div style="display: inline-block;vertical-align: middle;float: right;margin-right: 3%;text-align: right;">
                    <h3 style="color: #62cb31;"><a href="#">${a.collAmt.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} ${a.collTokenSymbol}</a></h3>
                    <div class="text-muted font-bold m-b-xs">Collateral <span> ($${q(a.collAmt.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')))})</span></div>
                </div>
            </div>
            <div>
                <div class="text-center" style="margin-top: 3%;">
                    <button ${k(a)} ${i(a)} id="borrowStep2Approve" class="btn btn-success btn-lg">
                        1. Approve
                    </button>    
                </div>
                <div class="text-center" style="margin-top: 3%;">
                    <button ${k(a)} ${j(a)} id="borrowStep2Transfer" class="btn btn-success btn-lg">
                        2. Transfer
                    </button>    
                </div>
                <div class="text-left text-muted small m-t-xl" style="margin-top: 5%;margin-bottom: 1%;">
                    Deposit collateral is divided into following 2 steps:<br/>
                    1. Approve loan contract to withdraw collateral amount<br/>
                    2. Transfer collateral amount to loan contract using given approval<br/>
                    Once you transfer this collateral amount, your loan can get funded.    
                </div>
            </div>
        </div>
        <div class="panel-footer contact-footer">
            <div class="row">
                <div class="col-md-4 border-right"> <div class="contact-stat"><span>INTEREST</span> <strong>${a.premiumPerct}%</strong></div> </div>
                <div class="col-md-4 border-right"> <div class="contact-stat"><span>TENURE</span> <strong>${a.termPerInst*a.instLen/86400} Days</strong></div> </div>
                <div class="col-md-4"> <div class="contact-stat"><span>LOAN AMOUNT</span> <strong> Ξ ${web3.fromWei(a.debtAmt,'ether').toFixed(6)} ($${q(web3.fromWei(a.debtAmt,'ether'))})</strong></div> </div>
            </div>
        </div>
        <div class="text-left text-muted small m-t-xl" style="margin-top: 2%;">
            Contract Address: ${a.address}<br/>
            Tokens Approved for Contract: ${a.tokenApproval.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} ${a.collTokenSymbol} <br/>
            <!--
            Collateral with Contract : ${a.tokensWithContract} <br/>
            -->
        </div>
    </div>
    `},b.renderLoanDetail=function(a){return`
    <div class="row">
        <div class="col-lg-12">
            <div class="hpanel">
                <div class="panel-heading">
                    Loan Information
                    <span class="label ${m(a)} pull-right">${n(a)}</span>
                    <span class="label label-default pull-right ${function(a){return a.isCurrentAccBorrower||a.isCurrentAccLender?'show':'hide'}(a)}" style="margin-right:5px;
                    text-transform: uppercase;">
                    ${function(){return a.isCurrentAccBorrower?'BORROWER':a.isCurrentAccLender?'LENDER':''}(a)}
                    </span>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-md-3 text-center">
                            <div>
                                <h3 class="font-extra-bold m-t-lg text-success"  style="margin-bottom:0px;">
                                Ξ ${web3.fromWei(a.debtAmt,'ether').toFixed(6)}
                                </h3>
                                <small>Loan Amount<span> ($${q(web3.fromWei(a.debtAmt,'ether'))})</span></small>
                            </div>
                            <div>
                                <h3 class="font-extra-bold m-t-lg" style="margin-bottom:0px;" >
                                ${a.collAmt.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} 
                                <span style="font-size:20px;">${a.collTokenSymbol}</span>
                                </h3>
                                <small>Collateral<span> ($${q(a.collAmt.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')))})</span></small>
                            </div>
                        </div>
                        
                        <div class="col-md-6">
                            <div class="text-center small">
                                <i class='fa fa-clock-o'></i>
                                Market Fluctuations (${a.collTokenSymbol})
                                <a href="https://www.cryptocompare.com/coins/${function(a){return'TFT'===a.collTokenSymbol?'omg':'TVT'===a.collTokenSymbol?'zrx':a.collTokenSymbol.toLowerCase()}(a)}/overview/eth" style="float:right;" class="text-success" target="_blank">
                                <i class="fa fa-line-chart"></i>
                                    More Info
                                </a>
                            </div>
                            <div class="flot-chart" style="height: 160px">
                                <div class="flot-chart-content" id="flot-line-chart"></div>
                            </div>
                        </div>
                        
                        <div class="col-md-3 text-center">
                            <div style="margin-top: 15%;">
                                <button id="action1" type="button" class="btn w-xs btn-success btn-lg">
                                </button>
                            </div>
                            <div style="margin-top: 2%;">
                                <button id="action2" type="button" class="btn w-xs btn-success btn-lg">
                                </button>
                            </div>
                            <div id="actionText" class="small m-t-md">
                            </div>
                            <div id="pendingActionText" class="font-light" style="font-size:14px;margin-top:70px;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-footer text-muted">
                <a href="https://${function(){return'1'==a.netId?'':a.netName+'.'}(a)}etherscan.io/address/${a.address}" target="_blank">
                    Contract Address:   <u>${a.address}</u>
                </a>
                <div class="small pull-right">
                        <i class='fa fa-clock-o'></i>
                        <i>Contract last updated on
                        ${h(a.lastUpdated)}</i>
                </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-3">
            <div class="hpanel">
                <div class="panel-body text-center h-200">
                    <i class="pe-7s-graph1 fa-4x"></i>
                    <h1 class="m-xs">
                        ${a.premiumPerct}%
                    </h1>
                    <h3 class="font-extra-bold no-margins text-success">
                        Premium
                    </h3>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="hpanel stats">
                <div class="panel-body h-200">
                    <div class="stats-title pull-left">
                        <h4>Installment Period</h4>
                    </div>
                    <div class="stats-icon pull-right">
                        <i class="pe-7s-share fa-4x"></i>
                    </div>
                    <div class="m-t-xl">
                        <h3 class="m-b-xs">
                            ${a.termPerInst*a.instLen/86400} Days 
                        </h3>
                        <div class="progress m-t-xs full progress-small" style="margin-top: 10%;">
                            <div style="width: ${a.instPaid*(100/a.instLen)}%"
                                role="progressbar" class=" progress-bar progress-bar-success">
                                <span class="sr-only">0% Complete (success)</span>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-xs-6">
                                <small class="stats-label">Paid</small>
                                <h4>
                                    ${a.instPaid}
                                </h4>
                            </div>

                            <div class="col-xs-6">
                                <small class="stats-label">Total</small>
                                <h4>
                                    ${a.instLen}
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="hpanel stats">
                <div class="panel-body h-200">
                    <div class="stats-title pull-left">
                        <h4>Collateral With Contract</h4>
                    </div>
                    <div class="stats-icon pull-right">
                        <i class="pe-7s-science fa-4x"></i>
                    </div>
                    <div class="m-t-lg">
                        <!--
                        <h1 class="text-success">1.5x</h1>
                        -->
                        <h1 class="${function(){var b=a.collAmt.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')).div(web3.fromWei(a.debtAmt,'ether')).toNumber();return 1.25<=b?'text-success':'text-danger'}(a)}">
                        ${a.collAmt.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')).div(web3.fromWei(a.debtAmt,'ether')).toFixed(2)}x
                        </h1>
                        <br/>
                        <h3 style="margin-bottom:5px;">
                            ${a.tokensWithContract.div(web3.toBigNumber(10).pow(a.collTokenDecimal)).toFixed(6)} ${a.collTokenSymbol}
                        </h3>
                        <div>
                            <span style="font-size:14px;" class="text-success">
                            Ξ ${a.tokensWithContract.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')).toFixed(6)}
                            </span>
                            <span class="text-success"> ($${q(a.tokensWithContract.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')))})</span>
                        </div>
                        <!--
                        <h3 style="margin-bottom:5px;">
                            ${a.collAmt.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} ${a.collTokenSymbol}
                        </h3>
                        <div>
                            <span style="font-size:14px;" class="text-success">
                            Ξ ${a.collAmt.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')).toFixed(6)}
                            </span>
                        </div>
                        -->
                        <!--
                        <div>
                             ${a.priceRelTokenAmt.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} ${a.collTokenSymbol} =  Ξ ${web3.fromWei(a.priceRelTokenPrice,'ether').toFixed(6)}
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="hpanel stats">
                <div class="panel-body h-200">
                    <div class="stats-title pull-left">
                        <h4>Expected Return (ETH)</h4>
                    </div>
                    <div class="stats-icon pull-right">
                        <i class="pe-7s-cash fa-4x"></i>
                    </div>
                    <div class="clearfix"></div>
                    <div class="flot-chart">
                        <div class="flot-chart-content" id="flot-income-chart"></div>
                    </div>
                    <div class="m-t-xs">
                        <div class="row">
                            <div class="col-xs-5">
                                <small class="stat-label">Investment</small>
                                <h4>
                                ${web3.fromWei(a.debtAmt,'ether').toFixed(6)}
                                </h4>
                                <span> </span>
                            </div>
                            <div class="col-xs-7">
                                <small class="stat-label">Premium ($${q(web3.fromWei(a.debtAmt.times(a.premiumPerct).div(100),'ether'))})</small>
                                <h4>
                                ${web3.fromWei(a.debtAmt.times(a.premiumPerct).div(100),'ether').toFixed(8)}
                                <i class="fa fa-level-up text-success"></i>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class = "row">
        <div class="col-lg-6">
            <div class="hpanel">
                <div class="panel-body list">
                    <div class="stats-title">
                        <h4>Additional Details</h4>
                    </div>
                    <div class="table-responsive project-list">
                    <table class="table table-striped">
                        <tbody>
                        <tr>
                            <td class="text-success">
                                Current State
                            </td>
                            <td>
                                ${n(a)}
                            </td>
                        </tr>
                        <tr>
                        <td class="text-success">
                                Borrower Address
                            </td>
                            <td>
                                <a href="https://${function(){return'1'==a.netId?'':a.netName+'.'}(a)}etherscan.io/address/${a.borrower}" target="_blank">
                                    <u>${a.borrower}</u>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td class="text-success">
                                Lender Address
                            </td>
                            <td>
                                ${function(){return'0x0000000000000000000000000000000000000000'===a.lender?'-':`<a href="https://${function(){return'1'==a.netId?'':a.netName+'.'}(a)}etherscan.io/address/${a.lender}" target="_blank">
                                            <u>${a.lender}</u>
                                        </a>`}(a)}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-success">
                                Fund Date
                            </td>
                            <td>
                            ${h(function(a){var b=a.states[2];return!!b&&0!=b.toNumber()?b:0}(a))}
                            </td>
                        </tr>
                        <tr>
                            <td class="text-success">
                                Ether with Contract
                            </td>
                            <td>
                            Ξ ${web3.fromWei(a.ethWithContract,'ether')} <span> ($${q(web3.fromWei(a.ethWithContract,'ether'))})</span>
                            </td>
                        </tr>
                        <!--
                        <tr>
                            <td class="text-success">
                                Collateral with Contract
                            </td>
                            <td>
                                ${a.tokensWithContract.div(web3.toBigNumber(10).pow(a.collTokenDecimal))} ${a.collTokenSymbol}
                                (Ξ ${a.tokensWithContract.times(a.priceRelTokenPrice).div(web3.toBigNumber(10).pow(a.collTokenDecimal)).div(web3.toWei(1,'ether')).toFixed(6)})
                            </td>
                        </tr>
                        -->
                        <tr>
                            <td class="text-success">
                                Collateral Token Contract
                            </td>
                            <td>
                                <a href="https://${function(){return'1'==a.netId?'':a.netName+'.'}(a)}etherscan.io/address/${a.collTokenAddr}" target="_blank">
                                    <u>${a.collTokenAddr}</u>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="hpanel">
                <div class="panel-body list">
                    <div class="table-responsive project-list">
                        <table class="table table-striped" style="text-align:center!important;">
                            <thead>
                            <tr>
                                <th class="text-center">#</th>
                                <th class="text-center">Installment</th>
                                <!--
                                <th>Progress</th>
                                -->
                                <th class="text-center">Paid On</th>
                                <th class="text-center">Due Date</th>
                                <th class="text-center">Action</th>
                                <th class="text-center">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                                ${f(a)}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="panel-footer text-muted m-t-sm">
                    <div style="float:right;" class="${function(a){return a.isCurrentAccLender&&(3===a.state.toNumber()||2===a.state.toNumber())&&a.instPaid.toNumber()!=a.instLen.toNumber()?'show':'hide'}(a)}">
                        <button id="processCall" class="btn btn-danger btn-outline">State Check</button>
                        <a href="http://re.getnuo.com/state-check" target="_blank" class="fa fa-question-circle text-danger" style="font-size:15px;vertical-align:top;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `},b.startTxLoading=function(a){var b=`
    <div id="txLoader" class="splash">
        <div class="color-line"></div>
        <div class="splash-title">
            <h1>Nuo Lend</h1>
            <p>Waiting for transaction to complete</p>
            <a href="https://${p()}etherscan.io/tx/${a}" target="_blank">
                <p class="text-muted">Tx Hash<br/> <u>${a}</u></p>
            </a>
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
        </div>
    </div>
    `;$('body').append(b),$('#txLoader').css('display','block')},b.createSupportedOptions=function(a){return`
    ${a.map((a)=>`
        <option value="${a[0]}">${a[2]} - ${a[1]} - ${a[0]}</option>
    `).join('')}
    `},b.redirectToBorrowerStep2=function(a){$(location).attr('href','borrow_step2.html?loanAddr='+a)},b.redirectToLoanDetails=function(a){$(location).attr('href','loan_detail.html?loanAddr='+a)},b.redirectToBorrowSuccess=function(a){$(location).attr('href','borrow_success.html?loanAddr='+a)},b.redirectToLendSuccess=function(a){$(location).attr('href','lend_success.html?loanAddr='+a)},b.redirectError500=function(){$(location).attr('href','error_500.html')},b.stopTxLoading=function(){$('#txLoader').remove()},b.performPageReload=function(){location.reload(!0)},b.stopLoading=function(){$('#loader').css('display','none')},b.showLoading=d,b.getParameterByNameForPage=e,b.convertEtherToUSD=q;var s;(function(){d(),$.ajax({url:'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD&extraParams=lend',async:!1,success:function(a){s=a.USD},error:function(){s=0}})})()}});