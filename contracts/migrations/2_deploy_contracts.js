const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0x3712fA6FfF4d9aA8Adef1DD321Aeac10812d57bF"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
