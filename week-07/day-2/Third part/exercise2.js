'use strict';

var accounts = [
	{ 'client_name': 'Igor', 'account_number': 11234543, 'balance': 203004099.2 },
	{ 'client_name': 'Vladimir', 'account_number': 43546731, 'balance': 5204100071.23 },
	{ 'client_name': 'Sergei', 'account_number': 23456311, 'balance': 1353600.0 }
]

// Create function that returns the name and balance of cash on an account

// Create function that transfers an balance of cash from one account to another
// it should have three parameters:
//  - from account_number
//  - to account_number
//  - balance
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

function returnData() {
    for (var i in accounts) {
        console.log(accounts[i].client_name, accounts[i].balance);
    }
}

function transferBalance (from, to, balance) {
    for (var i in accounts) {
        if (from === accounts[i].account_number) {
            accounts[i].balance -= balance;
        }
        if (to === accounts[i].account_number) {
            accounts[i].balance += balance;
        }
    }
}

returnData();
transferBalance(11234543, 43546731, 1);
returnData();

console.log(accounts[0].hasOwnProperty('client_name'));