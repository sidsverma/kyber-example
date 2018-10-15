pragma solidity 0.4.24;


interface FeeBurnerInterface {
    function handleFees (uint tradeWeiAmount, address reserve, address wallet) public returns(bool);
}
