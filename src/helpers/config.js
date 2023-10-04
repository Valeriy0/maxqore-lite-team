import {matrixMaxqoreAbi} from 'helpers/contractsAbi/maxqore';
import {matrixTokenAbi} from 'helpers/contractsAbi/token';
import {matrixXBaseAbi} from 'helpers/contractsAbi/xbase';
import {contractRouterAbi} from 'helpers/contractsAbi/router';
// prod
export default {
  baseUrl: 'https://busd.forsage.io/maxqore/',
  allowedChainId: 56,
  stand: 'prod',

  router: '0x33C31572868f3Df6CD2647561D4c1f0BF1Bb9C9C',
  routerAbi: contractRouterAbi,

  matrixMaxqore: '0x27D6bBaC9112D2097FafA3B14Ae367539A7B1260',
  matrixMaxqoreAbi: matrixMaxqoreAbi,

  BUSDContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  BUSDContractAbi: matrixTokenAbi,

  XBASEContract: '0x5acc84a3e955bdd76467d3348077d003f00ffb97',
  XBASEContractAbi: matrixXBaseAbi,
};

// stage
// export default {
//   baseUrl: 'https://busd.forsage.io/maxqore/',
//   allowedChainId: 56,
//   stand: 'prod',

//   router: '0x33C31572868f3Df6CD2647561D4c1f0BF1Bb9C9C',
//   routerAbi: contractRouterAbi,

//   matrixMaxqore: '0xE8160fbD11B59C0a382d1189356718cCAAe291ef',
//   matrixMaxqoreAbi: matrixMaxqoreAbi,

//   BUSDContract: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
//   BUSDContractAbi: matrixTokenAbi,

//   XBASEContract: '0x5acc84a3e955bdd76467d3348077d003f00ffb97',
//   XBASEContractAbi: matrixXBaseAbi,
// };

// dev
// export default {
//   baseUrl: 'https://busd.forsage.io/maxqore/',
//   allowedChainId: 97,
//   stand: 'prod',

//   matrixMaxqore: '0xE1d37df14bcA9D86D00070E8Be031f1485592Dfe',
//   matrixMaxqoreAbi: matrixMaxqoreAbi,

//   BUSDContract: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
//   BUSDContractAbi: matrixTokenAbi,

//   XBASEContract: "0x172eA683094C6772159aBCe72b9F99D0D9a24f28",
//   XBASEContractAbi: matrixXBaseAbi,
// };
