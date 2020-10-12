import bankAccount from '../bankAccount';

describe('Bank account balance methods and properties', () => {
    beforeEach(() => {
        bankAccount.balance = 1000;
    })

    test('Initial balance should be 1000', () => {
        expect(bankAccount.balance).toBe(1000);
    })

    test('depositeMoney should correctly alter balance', () => {
        bankAccount.depositMoney(2000)
        expect(bankAccount.balance).toBe(3000);
    })

    test('withdrawMoney should correctly alter balance', () => {
        bankAccount.withdrawMoney(500)
        expect(bankAccount.balance).toBe(500);
    })
})