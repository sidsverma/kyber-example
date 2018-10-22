pragma solidity 0.4.24;

import "./kyber-smart-contracts/ERC20Interface.sol";
import "./kyber-smart-contracts/KyberNetworkProxy.sol";

contract KyberInterface {
    event StringEvent(string text);
    event destAmountEvent(uint amount);
    event uintEvent(uint amount);
    event ERC20Event(ERC20 token);

    //@param _kyberNetworkProxy kyberNetworkProxy contract address
    //@param srcToken source token contract address
    //@param srcQty in token wei
    //@param destToken destination token contract address
    //@param destAddress address to send swapped tokens to
    function swapTokenToToken(KyberNetworkProxyInterface _kyberNetworkProxy,
        ERC20 srcToken, uint srcQty, ERC20 destToken) public returns(uint) {
        emit StringEvent("Starting of swapTokenToToken");

        uint expectedRate;
        
        //getExpectedRate returns expected rate and slippage rate
        //we use the slippage rate as the minRate
        (expectedRate, ) = _kyberNetworkProxy.getExpectedRate(srcToken, destToken, srcQty);
        emit StringEvent("After getExpectedRate in swapTokenToToken");
        
        //check that user has transferred tokens to this contract
        //require(srcToken.transferFrom(msg.sender, this, srcQty));
        
        // Mitigate ERC20 Approve front-running attack, by initially setting
        // allowance to 0
        require(srcToken.approve(_kyberNetworkProxy, 0), "Failed setting allowance to 0.");
        emit StringEvent("After getting approval and setting to 0 in swapTokenToToken");
                    
        //approve tokens so network can take them during the swap
        srcToken.approve(address(_kyberNetworkProxy), srcQty);
        emit StringEvent("After getting approval for srcQty in swapTokenToToken");
        uint destAmount = _kyberNetworkProxy.swapTokenToToken(srcToken, srcQty, destToken, expectedRate);
        emit StringEvent("After swapTokenToToken in swapTokenToToken");
        emit destAmountEvent(destAmount);

        return destAmount;
        //send received tokens to destination address
        //require(destToken.transfer(destAddress, destAmount));
    }

    function swapEtherToToken (KyberNetworkProxyInterface _kyberNetworkProxy,
        ERC20 eth, ERC20 destToken) public payable returns(uint){

        uint expectedRate;
        (expectedRate,) = _kyberNetworkProxy.getExpectedRate(eth, destToken, msg.value);

        //will send back tokens to this contract's address
        uint destAmount = _kyberNetworkProxy.swapEtherToToken.value(msg.value)(destToken, expectedRate);
        emit StringEvent("After swapEtherToToken, the destAmount: ");
        emit destAmountEvent(destAmount);
        return destAmount;
    }

    function allowanceFunction(KyberNetworkProxyInterface _kyberNetworkProxy,
        ERC20 srcToken, uint tokenQty) public {
        srcToken.approve(address(_kyberNetworkProxy), tokenQty);
    }
    //@param _kyberNetworkProxy kyberNetworkProxy contract address
    //@param token source token contract address
    //@param tokenQty token wei amount
    //@param destAddress address to send swapped ETH to
    function swapTokenToEther (KyberNetworkProxyInterface _kyberNetworkProxy,
        ERC20 srcToken, uint tokenQty, ERC20 eth) public returns(uint){

        uint expectedRate;
        (expectedRate,) = _kyberNetworkProxy.getExpectedRate(srcToken, eth, tokenQty);
        // Check that the token transferFrom has succeeded
        //require(srcToken.transferFrom(msg.sender, this, tokenQty), "Failed Check that the token transferFrom has succeeded");

        // Mitigate ERC20 Approve front-running attack, by initially setting
        // allowance to 0
        require(srcToken.approve(_kyberNetworkProxy, 0), "Failed setting allowance to 0.");
        // Approve tokens so network can take them during the swap
        srcToken.approve(address(_kyberNetworkProxy), tokenQty);

        // emit ERC20Event(srcToken);
        // emit uintEvent(tokenQty);
        // emit uintEvent(expectedRate);
        uint destAmount = _kyberNetworkProxy.swapTokenToEther(srcToken, tokenQty, expectedRate);
        
        return destAmount;
    }

    function getExpectedRate(KyberNetworkProxyInterface _kyberNetworkProxy,
            ERC20 srcToken, uint srcQty, ERC20 destToken) public view returns(uint,uint) {
        uint expectedRate;
        uint minRate;
        (expectedRate, minRate) = _kyberNetworkProxy.getExpectedRate(srcToken, destToken, srcQty);
        return (expectedRate, minRate);
    }

    // to directly send ether to contract
    function() public payable {
    }
}