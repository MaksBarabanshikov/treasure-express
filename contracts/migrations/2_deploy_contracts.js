const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0xcF9bbF734430b36f284B51f535ba12371C18575e"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
