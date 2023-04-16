const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  // Deploy mock collateral token
  const Collateral = await hre.ethers.getContractFactory("ERC20Mock");
  const collateral = await Collateral.deploy("Base Carbon Tonne", "BCT", ethers.utils.parseEther("1000000000"));
  await collateral.deployed();
  console.log("Collateral Token deployed to:", collateral.address);

  // Deploy mock BAI token
  const BaiToken = await hre.ethers.getContractFactory("BaiStableCoin");
  const baiToken = await BaiToken.deploy();
  await baiToken.deployed();
  console.log("BAI Token deployed to:", baiToken.address);

  TwapGetter = await ethers.getContractFactory("TwapGetter");
  twapGetter = await TwapGetter.deploy();
  await twapGetter.deployed();
  console.log("TWAP deployed to:", twapGetter.address);

  // Deploy BaiVault
  const BaiVault = await hre.ethers.getContractFactory("BaiVault");
  const baiVault = await BaiVault.deploy(
    twapGetter.address,
    ethers.utils.parseUnits("150", 18), // Minimum collateral percentage
    "Bai Vault", // Name
    "BCT-BAI", // Symbol
    baiToken.address, // BAI token address
    collateral.address, // Collateral token address
    "", // Base URI
    deployer.address, // Treasury address
    deployer.address, // Fees contract address
    ethers.utils.parseUnits("50000", 18), // Maximum per vault
  );
  await baiVault.deployed();
  console.log("BaiVault deployed to:", baiVault.address);

  await collateral.approve(baiVault.address, ethers.utils.parseUnits("1000000", 18))
  await baiToken.approve(baiVault.address, ethers.utils.parseUnits("1000000", 18))
  await baiToken.mint(baiVault.address, ethers.utils.parseUnits("11111", 18))
  
  await verify(collateral.address, ["Base Carbon Tonne", "BCT", ethers.utils.parseEther("1000000000")])
  await verify(baiToken.address, [])
  await verify(baiVault.address, [    twapGetter.address,
    ethers.utils.parseUnits("150", 18), // Minimum collateral percentage
    "Bai Vault", // Name
    "BCT-BAI", // Symbol
    baiToken.address, // BAI token address
    collateral.address, // Collateral token address
    "", // Base URI
    deployer.address, // Treasury address
    deployer.address, // Fees contract address
    ethers.utils.parseUnits("50000", 18), // Maximum per vault
  ])
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

async function verify(contract, params) {
  await run("verify:verify", {
    address: contract,
    constructorArguments: params
  }).then(console.log).catch(console.log)
  console.log("VERIFIED")
}