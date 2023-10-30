//require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
//module.exports = {
//  solidity: "0.8.19",
//};


// https://eth-goerli.g.alchemy.com/v2/-tYg-xnwNn5E2HXeNxiT-KiIPeQPbPTE

require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.19",
  networks: {
        goerli: {
         url: 'https://eth-goerli.g.alchemy.com/v2/-tYg-xnwNn5E2HXeNxiT-KiIPeQPbPTE',
         accounts: [ '089f05f7578b0c1183e356e05b417857004b9dcc38c76f20c5c603abf0e6226e']
      }
  }

}