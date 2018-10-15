const abi = [
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