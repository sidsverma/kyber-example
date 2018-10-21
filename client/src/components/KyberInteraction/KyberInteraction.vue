<template>
  <div>
    <v-form v-model="valid">
        <v-text-field
            v-model="srcToken"
            :rules="nameRules"
            label="Token1"
            required
        ></v-text-field>
        <v-text-field
            v-model="srcQty"
            :rules="numRules"
            label="Src Qty"
            required
        ></v-text-field>
        <v-text-field
            v-model="destToken"
            :rules="nameRules"
            label="Token2"
            required
        ></v-text-field>
  </v-form>

    <v-btn @click="getRate">Get Rate</v-btn>
    <v-btn color="success" @click="swap">Swap</v-btn>
    <v-btn @click="clear">Clear</v-btn>
  </div>
</template>
<script>
import {abi} from './exchangeAbi'
export default {
    data: () => ({
        ETH_ADDRESS: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        KNC_ADDRESS: '0xB2f3dD487708ca7794f633D9Df57Fdb9347a7afF',
        OMG_ADDRESS: '0x8870946B0018E2996a7175e8380eb0d43dD09EFE',
        isInitDone: false,
        valid: true,
        srcToken: '',
        destToken: '',
        srcQty: 0,
        nameRules: [
        v => !!v || 'Name is required'
      ],
      numRules: [
        v => !!v || 'Num is required',
        v => (v && v > 0) || 'Num must be greater than 0'
      ],
      myAddress: '',
      myContract: '',
      kyberInterfaceContractAddress: '0x7b17381bf36d648352df287f21625a6b5601178a', // use the latest contract address
      kyberNetworkProxyContract : '0x7e6b8b9510D71BF8EF0f893902EbB9C865eEF4Df'
    }),
    methods: {
        async initContract() {
            if(!this.isInitDone) {
                var kyberInterfaceContractAddress = this.kyberInterfaceContractAddress
                var Web3 = require('web3')
                web3 = new Web3(web3.currentProvider);
                this.myAddress = web3.eth.accounts[0]
                console.log(this.myAddress)
                var MyContract = web3.eth.contract(abi)
                this.myContract = MyContract.at(kyberInterfaceContractAddress)
                let stringFromContract = this.myContract.StringEvent({toBlock: 'latest'});
                stringFromContract.watch((error, result)=>{
                if (!error) {
                    console.log("StringEvent: " + result.args.text)
                } else
                    console.log("error")
                })
                let amountFromContract = this.myContract.destAmountEvent({toBlock: 'latest'});
                amountFromContract.watch((error, result)=>{
                if (!error) {
                    console.log("destAmountEvent: " + result.args)
                    var BigNumber = require('bignumber.js');
                    console.log((new BigNumber(result.args.amount)).toNumber())
                } else
                    console.log("error")
                })
                let uintFromContract = this.myContract.uintEvent({toBlock: 'latest'});
                uintFromContract.watch((error, result)=>{
                if (!error) {
                    console.log("uintEvent: " + result.args)
                    var BigNumber = require('bignumber.js');
                    console.log((new BigNumber(result.args.amount)).toNumber())
                } else
                    console.log("error")
                })
                this.isInitDone = true
            }
        },
        stdlog(input) {
            console.log(`${moment().format('YYYY-MM-DD HH:mm:ss.SSS')}] ${input}`);
        },
        async getRate() {
            await this.initContract()
            var expectedRate;
            var slippageRate;
            var srcTok = this.srcToken != ''? this.srcToken : this.ETH_ADDRESS
            var srcQty = this.srcQty != 0 ? this.srcQty : 1
            var dstTok = this.destToken != ''? this.destToken : this.OMG_ADDRESS
            this.myContract.getExpectedRate(this.kyberNetworkProxyContract, srcTok,
            web3.toWei(srcQty), dstTok, function(err, returnedValues) {
                if(err)
                    console.log(err)
                else {
                    var BigNumber = require('bignumber.js');
                    console.log(returnedValues)
                    expectedRate = new BigNumber(returnedValues[0])
                    slippageRate = new BigNumber(returnedValues[1])
                    console.log(expectedRate.toNumber())
                    console.log(slippageRate.toNumber())
                }
                })
        },
        async swap() {
            await this.initContract()
            var srcTok = this.srcToken != ''? this.srcToken : this.OMG_ADDRESS
            var srcQty = this.srcQty != 0 ? this.srcQty : 0.01
            var dstTok = this.destToken != ''? this.destToken : this.ETH_ADDRESS
            // why is this call not invoking a transfer of tokens call from metamask?
            this.myContract.swapTokenToToken(this.kyberNetworkProxyContract, srcTok,
                web3.toWei(srcQty, "ether"), dstTok, {from:this.myAddress, gas:520000}, function(err, returnedValue) {
                    console.log(returnedValue)
                })




            // this.myContract.swapTokenToEther(this.kyberNetworkProxyContract, srcTok,
            //     web3.toWei(srcQty), dstTok, {from:this.myAddress, gas:520000}, function(err, returnedValue) {
            //         console.log(returnedValue)
            //         var BigNumber = require('bignumber.js');
            //         console.log((new BigNumber(returnedValue)).toNumber())
            //     })
            // this.myContract.swapEtherToToken(this.kyberNetworkProxyContract, srcTok,
            //     dstTok, {from:this.myAddress, gas:520000, value:web3.toWei(srcQty)}, function(err, returnedValue) {
            //         console.log(returnedValue)
            //         var BigNumber = require('bignumber.js');
            //         console.log((new BigNumber(returnedValue)).toNumber())
            //     })
        },
        clear: function() {
            this.srcQty = 0
            this.srcToken = ''
            this.destToken = ''
        }
    }
}
</script>