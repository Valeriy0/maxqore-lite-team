import React from 'react';
import { MainPage } from 'pages/MainPage';
import { Web3ReactProvider } from '@web3-react/core';
import { metaMask, metaMaskHooks, walletConnectV2Hooks, walletConnectV2 } from 'connectors/wallets';

const connectors = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
];

function App() {
  
  return (
      <Web3ReactProvider connectors={connectors}>
        <MainPage />
      </Web3ReactProvider>
  );
}

export default App;
