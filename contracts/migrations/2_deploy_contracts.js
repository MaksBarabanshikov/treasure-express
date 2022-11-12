const Treasurexpress = artifacts.require("./Treasurexpress.sol");

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, "0x9629662d6970B54403a73d087C4d93b230037e13");
};