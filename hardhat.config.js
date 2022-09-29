require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const RINKEBY_RPC_URL =
    process.env.RINKEBY_RPC_URL || "https://eth-rinkeby.alchemyapi.io/v2/your-api-key"
const YCC_RPC_URL = process.env.YCC_RPC_URL || ""
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    defaultNetwork: "ycc",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
		ycc: {
			chainId: 999,
            url: "http://172.22.16.242:8545/",
			from: "0x6856f610b40e7321cace9e1f8752315110862573",
			accounts: ["0x3967abcafaea83fee72766ca6dae578f4f156b5d1dae1ddf119e4564d5e2658c"]
			//accounts: {
			//	mnemonic: "insect click process usual crime extra vague patch rule change disease between filter occur point",
			//	path: "m/44'/60'/0'/0",
			//	initialIndex: 0,
			//	count: 20,
			//	passphrase: "colin1211",
			//},
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        // coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
}
