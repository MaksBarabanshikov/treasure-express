const Treasurexpress = artifacts.require("./Treasurexpress.sol");

const currentWallet = "0xf7C25993801C0BaA63360C1774B117C82F14FdA7"

<<<<<<< HEAD
const testWallet = "0x9629662d6970B54403a73d087C4d93b230037e13"
=======
const testWallet = "0x5E8BF99b92f941C13f857AB46A8E8Fc0b013662a"
>>>>>>> 61e9a11bfc075c384bd728bc1b3a8860b845bbb5

module.exports = function(deployer) {
    deployer.deploy(Treasurexpress, testWallet);
};
