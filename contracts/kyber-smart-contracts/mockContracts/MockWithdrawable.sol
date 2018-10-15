pragma solidity ^0.4.24;


import "../Withdrawable.sol";


contract MockWithdrawable is Withdrawable {
    function () public payable { }
}
