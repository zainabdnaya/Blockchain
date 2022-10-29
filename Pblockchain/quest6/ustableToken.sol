// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

library SafeMath {
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        assert(b <= a);
        return a - b;
    }

    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        assert(c >= a);
        return c;
    }
}

/**
 * @title MinimalTokenAllowances
 * @dev Implements voting process along with vote delegation
 */
contract MinimalTokenAllowances {
    uint amount;
    uint256 public totalSupply;
    using SafeMath for uint256;
    event Transfer(address indexed from, address indexed to, uint256 value);
    mapping(address => uint256) balances;
   constructor  ( uint _amount) public{
            amount = _amount;
    }

    function transfer(address _to, uint256 _value) public returns (bool) {
        require(_to != address(0));
        require(_value <= balances[msg.sender]);
        balances[msg.sender] = balances[msg.sender].sub(_value);
        balances[_to] = balances[_to].add(_value);
        Transfer(msg.sender, _to, _value);
        return true;
    }

    function mint(address _to, uint256 _amount) public returns (bool) {
        totalSupply = totalSupply.add(_amount);
        balances[_to] = balances[_to].add(_amount);
        Transfer(0x0, _to, _amount);
        return true;
    }

}
