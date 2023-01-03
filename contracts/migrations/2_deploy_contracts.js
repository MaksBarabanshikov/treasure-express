const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0x60c55eAc3dA366e3807725D9a551345918d18De0"

const testWallet = "0xFbCd3810007CD47972483718987f87D2c6869970"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
