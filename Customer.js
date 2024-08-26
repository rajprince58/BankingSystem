class Customer {
    constructor(name, initialDeposit) {
      this.name = name;
      this.balance = initialDeposit;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
      this.balance -= amount;
    }
  
    transfer(amount, recipient) {
      if (amount > this.balance) {
        throw new Error("Insufficient funds");
      }
      this.withdraw(amount);
      recipient.deposit(amount);
    }
  
    getBalance() {
      return this.balance;
    }
  }

  module.exports = Customer;