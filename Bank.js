const Customer = require('./Customer');

class Bank {
    constructor() {
      this.customers = [];
    }
  
    addCustomer(name, initialDeposit) {
      const newCustomer = new Customer(name, initialDeposit);
      this.customers.push(newCustomer);
      return newCustomer;
    }
  
    getTotalBalance() {
      return this.customers.reduce((total, customer) => total + customer.getBalance(), 0);
    }
  }
  module.exports = Bank;
  