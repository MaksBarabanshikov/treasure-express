const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

const testWallet = "0xEdC9b3311cc153d1409a37Bf53F54e1E247716aD"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
