const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0x03ACA326715d37aA34611Cf8e1aCb9B47eF7AC41"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
