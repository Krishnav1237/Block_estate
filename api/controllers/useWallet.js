// hooks/useWallet.js
import { InjectedConnector } from '@web3-react/injected-connector';
import { useWeb3React } from '@web3-react/core';

const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42], // Mainnet, Ropsten, Rinkeby, Goerli, Kovan
});

export const useWallet = () => {
  const { activate, deactivate, active, account, library, connector, error } = useWeb3React();

  const connect = async () => {
    try {
      await activate(injected);
    } catch (error) {
      console.error("Error connecting to wallet", error);
    }
  };

  const disconnect = () => {
    try {
      deactivate();
    } catch (error) {
      console.error("Error disconnecting from wallet", error);
    }
  };

  return {
    connect,
    disconnect,
    active,
    account,
    library,
    connector,
    error,
  };
};
