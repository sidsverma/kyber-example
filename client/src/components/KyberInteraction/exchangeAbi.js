const abi = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "text",
        "type": "string"
      }
    ],
    "name": "StringEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "destAmountEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "uintEvent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "token",
        "type": "address"
      }
    ],
    "name": "ERC20Event",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_kyberNetworkProxy",
        "type": "address"
      },
      {
        "name": "srcToken",
        "type": "address"
      },
      {
        "name": "srcQty",
        "type": "uint256"
      },
      {
        "name": "destToken",
        "type": "address"
      }
    ],
    "name": "swapTokenToToken",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_kyberNetworkProxy",
        "type": "address"
      },
      {
        "name": "eth",
        "type": "address"
      },
      {
        "name": "destToken",
        "type": "address"
      }
    ],
    "name": "swapEtherToToken",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_kyberNetworkProxy",
        "type": "address"
      },
      {
        "name": "srcToken",
        "type": "address"
      },
      {
        "name": "tokenQty",
        "type": "uint256"
      },
      {
        "name": "eth",
        "type": "address"
      }
    ],
    "name": "swapTokenToEther",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_kyberNetworkProxy",
        "type": "address"
      },
      {
        "name": "srcToken",
        "type": "address"
      },
      {
        "name": "srcQty",
        "type": "uint256"
      },
      {
        "name": "destToken",
        "type": "address"
      }
    ],
    "name": "getExpectedRate",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      },
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
  export {abi}