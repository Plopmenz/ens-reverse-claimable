// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {IReverseRegistrar} from "../lib/ens-contracts/contracts/reverseRegistrar/IReverseRegistrar.sol";

contract ClaimReverseENS {
    /// @dev Set reverseRegistrar to zero address for no claim (for example on unsupported networks).
    constructor(address reverseRegistrar, address claimTo) {
        if (reverseRegistrar != address(0)) {
            IReverseRegistrar(reverseRegistrar).claim(claimTo);
        }
    }
}
