import { Address, Deployer } from "../web3webdeploy/types";
import { zeroAddress } from "viem";
import { readFile } from "fs/promises";
import path from "path";

export interface ReverseENSDeploymentSettings {
  chainId: bigint;
}

export interface ReverseENSDeployment {
  reverseRegistrar: Address;
}

export async function deploy(
  deployer: Deployer,
  settings?: ReverseENSDeploymentSettings
): Promise<ReverseENSDeployment> {
  const chainId = settings?.chainId ?? deployer.settings.defaultChainId;
  const networkName = chainIdToName(chainId);
  if (!networkName) {
    return {
      reverseRegistrar: zeroAddress,
    };
  }

  const json = await readFile(
    path.join(
      "..",
      "lib",
      "ens-contracts",
      "deployments",
      networkName,
      "ReverseRegistrar.json"
    ),
    { encoding: "utf-8" }
  );
  const info = JSON.parse(json) as { address: Address };
  return {
    reverseRegistrar: info.address,
  };
}

function chainIdToName(chainId: bigint): string | undefined {
  // Could scan the deployment dir until a folder with a matching chainId is found
  switch (chainId) {
    case BigInt(1):
      return "mainnet";
    case BigInt(11155111):
      return "sepolia";
  }
}
