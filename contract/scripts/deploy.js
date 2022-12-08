const hre = require("hardhat");
require("dotenv").config({ path: ".env" });
const { WHITELIST_CONTRACT_ADDRESS, METADATA_URL } = require("../constants");

async function main() {
  // Address of the whitelist contract that you deployed in the previous module
  const whitelistContract = WHITELIST_CONTRACT_ADDRESS;
  // URL from where we can extract the metadata for a Crypto Dev NFT
  const metadataURL = METADATA_URL;
  const XDCODE = await hre.ethers.getContractFactory("XDCODE");
  const xdcode = await XDCODE.deploy(metadataURL, whitelistContract);

  await xdcode.deployed();

  console.log(`Lock with 1 ETH deployed to ${xdcode.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
