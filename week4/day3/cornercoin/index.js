

class Account {
  constructor(username){
    this.username = username;
    this.balance = 0;
    this.Transactions = [];
    
  }

  
}

class Transaction {
  constructor(account, amount){
  this.amount = amount;
  this.account = account;
  }
  isallowed(){
    if(this.account.balance < this.amount){
      return false

    }
  }

  commit() {
    this.account.balance += this.value;
    this.account.Transactions.push(this.value);
    this.isallowed()

  }
  
  
  
}

class Withdrawal extends Transaction {
  get value(){
    return this.amount * -1
  }


}

class Deposit extends Transaction {
  get value(){
    return this.amount 
  }
}



// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('snow-patrol');
console.log(myAccount);
t1 = new Withdrawal(myAccount,50.25);
t1.commit();
console.log('Transaction 1:', t1);

t2 = new Withdrawal(myAccount,9.99);
t2.commit();
console.log('Transaction 2:', t2);

t3 = new Deposit(myAccount,120.0);
t3.commit();
console.log('Transaction 3:', t3);



