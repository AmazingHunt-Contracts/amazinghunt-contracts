import { ethers } from "hardhat";

async function main() {
  const common721 = await ethers.deployContract("CommonERC721", []);

  await common721.waitForDeployment();

  console.log("deployed");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
