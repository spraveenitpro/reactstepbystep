
'use strict'; 
module.exports = function create_btc_address(){ 

//Import dependencies
const {  BIP32Factory } = require('bip32'); 
const tinysecp = require('tiny-secp256k1');

const bip32 = BIP32Factory(tinysecp);
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//Define the network
const network = bitcoin.networks.bitcoin //use networks.testnet for testnet
//const network = bitcoin.networks.testnet
// Derivation path
const path = `m/49'/0'/0'/0` // Use m/49'/1'/0'/0 for testnet
//const path = `m/49'/1'/0'/0`
let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)
let root = bip32.fromSeed(seed, network)

let account = root.derivePath(path)
let node = account.derive(0).derive(0)
let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,
}).address

console.log(`
Wallet generated:
 - Address  : ${btcAddress},
 - Key : ${node.toWIF()}, 
 - Mnemonic : ${mnemonic}
     
`)
}