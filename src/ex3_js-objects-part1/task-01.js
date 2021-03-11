let piggyBank = {};

piggyBank.unbroken = true;
piggyBank.amount = "10 USD";
piggyBank.contentInCents = piggyBank.amount.split(" ")[0] * 100;

delete piggyBank.amount;
