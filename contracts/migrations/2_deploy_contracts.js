const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0x4508f3a0bFc68E0acc7BE802464FF196B0CB9e10"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
