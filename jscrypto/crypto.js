'use strict'; 
module.exports = function crypto(){ 
const  bitcoin =require('bitcoinjs-lib');
const cryptojs = require('crypto-js')
const sha256 = require('crypto-js/sha256')
const  { ECPairFactory }  = require('ecpair'); 
const crypto = require('crypto');



const tinysecp = require('tiny-secp256k1');
const ECPair = ECPairFactory(tinysecp);


// SHA256

var msg = "BernerJS"
const hash = sha256(msg)
console.log('\nSha256 of the message:' + hash.toString(cryptojs.enc.Hex))


// Construct keypair from private key:
var random = crypto.randomBytes(32)
var keypair =  ECPair.fromPrivateKey(random)
var pubkeybuf = keypair.publicKey;


// Construct public key

console.log('\nRandom 256 Bit private key in hex: ' +random.toString('hex'))



console.log("Public key: " + pubkeybuf.toString('hex'))


}