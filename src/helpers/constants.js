import { BigNumber } from "@ethersproject/bignumber";

export const MAXQORE_DATE_START = '2023-10-03T15:00Z'

export const MAXQORE_DATE_START_FIRST_TO_FIVE_LEVELS = MAXQORE_DATE_START;
export const MAXQORE_DATE_START_SIX_TO_TEN_LEVELS = '2023-10-04T15:00Z'
export const MAXQORE_DATE_START_ELLEVEN_TO_FIVETEEN_LEVELS = '2023-10-05T15:00Z'

export const getMaxQoreDateStartToLevel = (level) => {
  if ([1, 2, 3, 4, 5].includes(level)) {
    return MAXQORE_DATE_START_FIRST_TO_FIVE_LEVELS;
  } else if ([6, 7, 8, 9, 10].includes(level)) {
    return MAXQORE_DATE_START_SIX_TO_TEN_LEVELS;
  } else if ([11, 12, 13, 14, 15].includes(level)) {
    return MAXQORE_DATE_START_ELLEVEN_TO_FIVETEEN_LEVELS;
  } else {
    return MAXQORE_DATE_START;
  }
};

export const SOCIAL_LINKS = [
  {
    title: "telegram",
    link: "",
  },
];

export const NFT_START = 1675270800;
export const NFT_SALE_END = 1677585600;

export const ADD_CHAIN_ETHS_PARAMS = {
  56: {
    chainName: "Binance Smart Chain",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://bsc-dataseed.binance.org/"],
    blockExplorerUrls: ["https://bscscan.com"],
    chainId: "0x38",
  },
  97: {
    chainName: "Binance Smart Chain Testnet",
    nativeCurrency: {
      name: "Binance Coin",
      symbol: "BNB",
      decimals: 18,
    },
    rpcUrls: ["https://data-seed-prebsc-2-s3.binance.org:8545"],
    blockExplorerUrls: ["https://testnet.bscscan.com"],
    chainId: "0x61",
  },
};

export const DEFAULT_GAS_LIMIT = BigNumber.from(2000000);

export const MAX_VALUE =
  "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";

export const CONTRACT_NAMES = {
  MAXQORE: "maxqore",
  BUSD_TOKEN: "busdtoken",
  XBASE: "xbase",
  ROUTER: "router",
};

export const MENU_LINKS = [
  {
    title: "Documents",
    link: "/",
  },
  {
    title: "Documents",
    link: "/",
  },
  {
    title: "Documents",
    link: "/",
  },
];
