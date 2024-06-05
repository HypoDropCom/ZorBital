import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    optimism: {
      url: `https://mainnet.optimism.io`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};

export default config;
