const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0x9629662d6970B54403a73d087C4d93b230037e13"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
