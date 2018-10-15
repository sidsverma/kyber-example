var kyberInterface = artifacts.require("./KyberInterface.sol");

module.exports = function(deployer) {
  deployer.deploy(kyberInterface);
};
