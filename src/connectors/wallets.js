import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { initializeConnector } from '@web3-react/core';
import { MetaMask } from '@web3-react/metamask';
import { UAParser } from 'ua-parser-js';

import config from '../helpers/config';
import { WalletConnect } from '../libs/wc2';

export const supportedChainIds = [1, 56, 97];

export const RPC = {
  56: 'https://bsc-dataseed.binance.org/',
  97: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
};

export const [metaMask, metaMaskHooks] = initializeConnector((actions) => new MetaMask({ actions }));

export const [walletConnectV2, walletConnectV2Hooks] = initializeConnector(
    (actions) =>
        new WalletConnect({
          actions,
          options: {
            projectId: '3f88e94898fd5cef96179661bd9e3a49',
            chains: [config.allowedChainId],
            optionalChains: [config.allowedChainId],
            showQrModal: true,
          },
        }),
);

export const injectedConnector = new InjectedConnector({
  supportedChainIds,
});

export const walletConnectConnector = new WalletConnectConnector({
  rpc: RPC,
  bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  network: 'binance',
  chainId: parseInt(config.allowedChainId) || 56,
  supportedChainIds,
});

const UA = typeof window !== 'undefined' ? new UAParser(navigator.userAgent) : new UAParser('');

export const WALLETS = [
  {
    title: 'Trust Wallet',
    subtitle: 'DApp in app',
    connector: metaMask,
    icon: '/wallets/TW.png',
  },
  {
    title: 'TokenPocket',
    subtitle: 'DApp in app',
    connector: metaMask,
    icon: '/wallets/TP.png',
  },
  {
    title: 'MetaMask',
    subtitle: 'Desktop / DApp in app',
    connector: metaMask,
    icon: '/wallets/MT.png',
  },
  {
    title: 'WalletConnect',
    subtitle: 'Any wallet and browser',
    connector: walletConnectV2,
    icon: '/wallets/WC.png',
    disabled:
        (UA.getBrowser().name === 'Chrome WebView' || UA.getBrowser().name === 'Chrome') &&
        parseInt(UA?.getBrowser?.()?.major) <= 87,
  },
];
