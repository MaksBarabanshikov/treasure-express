const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0x5E8BF99b92f941C13f857AB46A8E8Fc0b013662a"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
