//const { network } = require("ycc")

module.exports = async ({ getNamedAccounts, deployments }) => {
	const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    //const chainId = network.config.chainId
	
	log("----------------------------------------------------")
    arguments = []
    await deploy("Migrations", {
       from: deployer,
       args: arguments,
       log: true,
    })
	
	log("----------------------------------------------------")
    arguments = []
    const token = await deploy("ArtToken", {
        from: deployer,
        args: arguments,
        log: true,
    })
	
	log("----------------------------------------------------")
    arguments = [token.address]
    const market = await deploy("ArtMarketplace", {
        from: deployer,
        args: arguments,
        log: true,
    })
	
	const artToken = await ethers.getContract("ArtToken", deployer)
	await artToken.setMarketplace(market.address)
}
module.exports.tags = ["all", "test"]
