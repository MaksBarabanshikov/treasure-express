const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0x60c55eAc3dA366e3807725D9a551345918d18De0"

const testWallet = "0xEdC9b3311cc153d1409a37Bf53F54e1E247716aD"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
