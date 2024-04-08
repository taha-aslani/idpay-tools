"use strict";

var request = require("request");

/**
 * Create new connection
 * @param apiKey Your IDPay apiKey
 * @param standbox Standbox status(debugmode) [true & false]
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
    var optionsct = {
        method: "POST",
        url: "https://api.idpay.ir/v1.1/payment",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": this._apiKey,
            "X-SANDBOX": this.sbox == true ? 1 : 0
        },
        body: optionsbodyct,
        json: true
    };
    return new Promise((resolve, reject) => {
         request(optionsct, function(err, resp, body) {
            if (err) reject(err);
            resolve(body);
        });
    });
};

/**
 * verify a transaction
 * @param optionsbodyvp Options | ID and Order ID
 * @returns Transaction verification Status
*/
idpay.prototype.verifyPayment = function(optionsbodyvp) {
    var optionsvp = {
        method: "POST",
        url: "https://api.idpay.ir/v1.1/payment/verify",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": this._apiKey,
            "X-SANDBOX": this.sbox == true ? 1 : 0
        },
        body: optionsbodyvp,
        json: true
    };
    return new Promise((resolve, reject) => {
         request(optionsvp, function(err, resp, body) {
            if (err) reject(err);
            resolve(body);
        });
    });
}

/**
 * gets a transaction status
 * @param optionsbodyts Options | ID and Order ID
 * @returns Transaction Status
*/
idpay.prototype.transactionStatus = function(optionsbodyts) {
    var optionsts = {
        method: "POST",
        url: "https://api.idpay.ir/v1.1/payment/inquiry",
        headers: {
            "Content-Type": "application/json",
            "X-API-KEY": this._apiKey,
            "X-SANDBOX": this.sbox == true ? 1 : 0
        },
        body: optionsbodyts,
        json: true
    };
    return new Promise((resolve, reject) => {
         request(optionsts, function(err, resp, body) {
            if (err) reject(err);
            resolve(body);
        });
    });
}

exports.idpay = idpay;