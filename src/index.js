import rinkebyZkAssets from '../zkAssets/rinkeby.json';

const { isUndefined } = require('lodash');

const networkToZkAssets = {
  // '1': {
  //   ...mainnetZkAssets,
  // },
  4: {
    ...rinkebyZkAssets,
  },
};

/**
 * Used to get metadata of ZkAssets that have been deployed to either the
 * Ethereum mainnet or a supported testnet. Throws if there are no known
 * ZkAssets deployed on the corresponding network.
 * @param networkId The desired networkId.
 * @returns The set of ZkAssets which have been deployed on the
 * given networkId.
 */
const getZkAssetsForNetwork = (networkId) => {
  if (isUndefined(networkToZkAssets[networkId])) {
    throw new Error(`Unknown network id (${networkId}). No known ZkAssets have been deployed on this network.`);
  }
  return networkToZkAssets[networkId];
};

export default getZkAssetsForNetwork;
