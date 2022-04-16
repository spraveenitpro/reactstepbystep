'use strict'; 
module.exports = function create_btc_address(){ 
const  bitcoin =require('bitcoinjs-lib');
const  { ECPairFactory }  = require('ecpair'); 
const NETWORK = bitcoin.networks.mainnet;


const tinysecp = require('tiny-secp256k1');
const ECPair = ECPairFactory(tinysecp);
const keyPair = ECPair.makeRandom({network: NETWORK});
const { address } = bitcoin.payments.p2pkh({
 pubkey: keyPair.publicKey,
 network: NETWORK,
 });

const privateKey = keyPair.toWIF();
console.log(address+" "+privateKey);


}