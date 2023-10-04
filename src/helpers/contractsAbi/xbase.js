export const matrixXBaseAbi = [
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'balances',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'lastUserId',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    name: 'userIds',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [],
    name: 'owner',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    name: 'users',
    outputs: [
      {
        name: 'id',
        type: 'uint256',
      },
      {
        name: 'referrer',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: '',
        type: 'uint8',
      },
    ],
    name: 'levelPrice',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        name: 'ownerAddress',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    payable: true,
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'referrer',
        type: 'address',
      },
    ],
    name: 'Registration',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'currentReferrer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'matrix',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'Reinvest',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'matrix',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'Upgrade',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'matrix',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'level',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'place',
        type: 'uint8',
      },
    ],
    name: 'NewUserPlace',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'MoneyHolded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'MoneyUnholded',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'matrix',
        type: 'uint8',
      },
      {
        indexed: false,
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'MatixClosed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        name: 'money',
        type: 'uint256',
      },
    ],
    name: 'CannotSendMoney',
    type: 'event',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'registrationExt',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: false,
    inputs: [
      {
        name: 'matrix',
        type: 'uint8',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'buyNewLevel',
    outputs: [],
    payable: true,
    stateMutability: 'payable',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'findFreeX3Referrer',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'findFreeX6Referrer',
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'usersActiveX3Levels',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'usersActiveX6Levels',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'usersX3Matrix',
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
      {
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'usersX6Matrix',
    outputs: [
      {
        name: '',
        type: 'address',
      },
      {
        name: '',
        type: 'address[]',
      },
      {
        name: '',
        type: 'address[]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'user',
        type: 'address',
      },
    ],
    name: 'isUserExists',
    outputs: [
      {
        name: '',
        type: 'bool',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'getActiveX3Levels',
    outputs: [
      {
        name: 'res',
        type: 'bool[12]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
  {
    constant: true,
    inputs: [
      {
        name: 'userAddress',
        type: 'address',
      },
    ],
    name: 'getActiveX6Levels',
    outputs: [
      {
        name: 'res',
        type: 'bool[12]',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];
