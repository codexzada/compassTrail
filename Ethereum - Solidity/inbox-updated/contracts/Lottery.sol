// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Lottery {
    address public manager;

    function manage() public {
        manager = msg.sender;
    }
}