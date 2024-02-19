// eventHandler.js
const { eventEmitter } = require('./operations');

// Event listeners for different ATM operations
eventEmitter.on('deposit', async (accountID, amount) => {
    // Handle deposit operation
});

eventEmitter.on('withdraw', async (accountID, amount) => {
    // Handle withdraw operation
});

eventEmitter.on('checkBalance', async (accountID) => {
    // Handle check balance operation
});

eventEmitter.on('viewTransactions', async (accountID) => {
    // Handle view transactions operation
});

module.exports = eventEmitter;
