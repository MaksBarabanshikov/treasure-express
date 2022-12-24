const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0x60c55eAc3dA366e3807725D9a551345918d18De0"

const testWallet = "0x7f4312DDb90301Ef4b2d59868e94643b6a43734e"

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
