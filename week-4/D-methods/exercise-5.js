/* 
A coffee machine is defined below. 
One can buy three different coffees.
Complete the methods "insertMoney" and "getCoffee" to match the expected result.

insertMoney takes an amount in parameter to add money in the coffee machine.
getCoffee takes a coffee type in parameter and dispends the selected coffee 
only if the inserted amount is greater or equal than the price of the coffee!
*/

var coffeeMachine = {
  brand: "Super Coffee",
  prices: {
    cappuccino: 2.4,
    blackCoffee: 1.5,
    flatWhite: 4.0
  },
  insertedAmount: 0,
  insertMoney: function(amount) {
    this.insertedAmount = amount;
    /* else this.amount < this.flatWhite && amount != this.flatWhite;
    {
      return "'Sorry you don't have enough money for a flatWhite'.";
    } */
  },
  getCoffee: function(coffee) {
        if (this.insertedAmount === this.blackCoffee)&& (coffee ==='blackCoffee') {
      //isTure = true;
      return this.insertMoney.blackCoffee;
    } else if (this.amount === this.cappuccino) {
      //isTure = true;
      return this.cappuccino;
    } else if (this.amount === this.flatWhite) {
      //isTure = true;
      return this.insertMoney.flatWhite;
    } 

    /*if ((this.insertMoney.amount < this.insertMoney.flatWhite) && 
    (this.insertMoney.amount != this.insertMoney.flatWhite));
    {
      return "'Sorry you don't have enough money for a flatWhite'.";
    }
    else  return ("'Please take your '." + coffee);
      
  }*/
  
  
  
  
};

/*
DO NOT EDIT ANYTHING BELOW THIS LINE
*/

coffeeMachine.insertMoney(2.4);
console.log(
  "Expected result: 'Please take your cappuccino'. Actual result: " +
    coffeeMachine.getCoffee("cappuccino")
);

coffeeMachine.insertMoney(1.5);
console.log(
  "Expected result: 'Please take your blackCoffee'. Actual result: " +
    coffeeMachine.getCoffee("blackCoffee")
);

coffeeMachine.insertMoney(4.0);
console.log(
  "Expected result: 'Please take your flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);

coffeeMachine.insertMoney(2.4);
console.log(
  "Expected result: 'Sorry you don't have enough money for a flatWhite'. Actual result: " +
    coffeeMachine.getCoffee("flatWhite")
);
