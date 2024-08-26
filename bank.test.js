const Customer = require('./Customer');
const Bank = require('./Bank');

describe('Bank System', () => {
  let bank;
  let customer1;
  let customer2;

  beforeEach(() => {
    bank = new Bank();
    customer1 = bank.addCustomer("Rajesh", 100);
    customer2 = bank.addCustomer("Yash", 50);
  });

  test('Initial balance is set correctly', () => {
    expect(customer1.getBalance()).toBe(100);
    expect(customer2.getBalance()).toBe(50);
  });

  test('Deposit increases the balance', () => {
    customer1.deposit(50);
    expect(customer1.getBalance()).toBe(150);
  });

  test('Withdraw decreases the balance', () => {
    customer1.withdraw(30);
    expect(customer1.getBalance()).toBe(70);
  });

  test('Transfer money between customers', () => {
    customer1.transfer(50, customer2);
    expect(customer1.getBalance()).toBe(50);
    expect(customer2.getBalance()).toBe(100);
  });

  test('Cannot withdraw more than balance', () => {
    expect(() => {
      customer2.withdraw(100);
    }).toThrow("Insufficient funds");
  });

  test('Total bank balance is calculated correctly', () => {
    expect(bank.getTotalBalance()).toBe(150);
  });
});
