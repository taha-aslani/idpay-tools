"use strict";

const axios = require('axios');

/**
 * Create new connection
 * @param {String} apiKey Your IDPay apiKey
 * @param {boolean} standbox Standbox status(debugmode) [true & false]
 * @returns new idpay class
 */
function idpay(api, debugmode){
    if (debugmode == void 0) { debugmode = false; };
    this.sbox = false;
    this._apiKey = api;
    this.sbox = debugmode;
}

/**
 * Creates an IDPay Transaction
 * @param optionsbodyct Options | amount In **RIALS**
 * @returns Transaction ID and Link
*/
idpay.prototype.createTransaction = function(optionsbodyct) {
    return new Promise((resolve, reject) => {
        axios.post("https://api.idpay.ir/v1.1/payment", optionsbodyct, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": this._apiKey,
                "X-SANDBOX": this.sbox == true ? 1 : 0
            }
        }).then( res => resolve(res.data) ).catch( err => reject(err) )
    });
};

/**
 * verify a transaction
 * @param optionsbodyvp Options | ID and Order_ID
 * @returns Transaction verification Status
*/
idpay.prototype.verifyPayment = function(optionsbodyvp) {
    return new Promise((resolve, reject) => {
        axios.post("https://api.idpay.ir/v1.1/payment/verify", optionsbodyvp, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": this._apiKey,
                "X-SANDBOX": this.sbox == true ? 1 : 0
            }
        }).then( res => resolve(res.data) ).catch( err => reject(err) )
    });
};

/**
 * gets a transaction status
 * @param optionsbodyts Options | ID and Order ID
 * @returns Transaction Status
*/
idpay.prototype.transactionStatus = function(optionsbodyts) {
    return new Promise((resolve, reject) => {
        axios.post("https://api.idpay.ir/v1.1/payment/inquiry", optionsbodyts, {
            headers: {
                "Content-Type": "application/json",
                "X-API-KEY": this._apiKey,
                "X-SANDBOX": this.sbox == true ? 1 : 0
            }
        }).then( res => resolve(res.data) ).catch( err => reject(err) )
    });
};

exports.idpay = idpay;