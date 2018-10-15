pragma solidity 0.4.24;

import "./kyber-smart-contracts/ERC20Interface.sol";
import "./kyber-smart-contracts/KyberNetworkProxy.sol";

contract KyberInterface {
    //@param _kyberNetworkProxy kyberNetworkProxy contract address
    //@param srcToken source token contract address
    //@param srcQty in token wei
    //@param destToken destination token contract address
    //@param destAddress address to send swapped tokens to
    function swapTokenToToken(KyberNetworkProxyInterface _kyberNetworkProxy,
        ERC20 srcToken, uint srcQty, ERC20 destToken) public returns(uint) {

        uint minRate;
        
        //getExpectedRate returns expected rate and slippage rate
        //we use the slippage rate as the minRate
        (, minRate) = _kyberNetworkProxy.getExpectedRate(srcToken, destToken, srcQty);
        
        //check that user has transferred tokens to this contract
        require(srcToken.transferFrom(msg.sender, this, srcQty));
        
        // Mitigate ERC20 Approve front-running attack, by initially setting
        // allowance to 0
        require(srcToken.approve(_kyberNetworkProxy, 0));
                    
        //approve tokens so network can take them during the swap
        srcToken.approve(address(_kyberNetworkProxy), srcQty);
        uint destAmount = _kyberNetworkProxy.swapTokenToToken(srcToken, srcQty, destToken, minRate);

        return destAmount;
        //send received tokens to destination address
        //require(destToken.transfer(destAddress, destAmount));
    }

    function getExpectedRate(KyberNetworkProxyInterface _kyberNetworkProxy,
            ERC20 srcToken, uint srcQty, ERC20 destToken) public view returns(uint,uint) {
        uint expectedRate;
        uint minRate;
        (expectedRate, minRate) = _kyberNetworkProxy.getExpectedRate(srcToken, destToken, srcQty);
        return (expectedRate, minRate);
    }
}