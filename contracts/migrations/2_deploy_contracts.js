const Treasurexpress = artifacts.require("./Treasurexpress.sol");

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, "0xf7C25993801C0BaA63360C1774B117C82F14FdA7");
};