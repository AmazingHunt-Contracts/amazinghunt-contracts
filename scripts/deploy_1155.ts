import { ethers } from "hardhat";

async function main() {
  const common1155 = await ethers.deployContract("CommonERC1155", ["AmazingHunt Item", "AMHI"]);

  await common1155.waitForDeployment();

  console.log("deployed");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
