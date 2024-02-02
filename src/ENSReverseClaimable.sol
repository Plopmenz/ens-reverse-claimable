// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

abstract contract ENSReverseClaimable {
    /// @notice ENS reverse name resolution is claimable by the owner of the contract.
    function owner() external pure virtual returns (address) {
        return 0x2309762aAcA0a8F689463a42c0A6A84BE3A7ea51; // plopmenz.eth
    }
}
