const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0x60c55eAc3dA366e3807725D9a551345918d18De0"

const testWallet = "0x16CE16B5dA5200f516b74951423a59F689Ce3983"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
