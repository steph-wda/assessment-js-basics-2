///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE
//used map function to pull out prices first and then reduced using the reduce function
const summedPrice = cart
  .map((elem) => elem["price"])
  .reduce((acc, curr) => acc + curr);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  return cartTotal + cartTotal * tax - couponValue;
};

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    For my customer object, I decided on the following properies:
     - name as a string (The resturant will need to know who this order is for. Capturing this as a string would be the best option)

     - address as a string (The resturant will need to know where to deliver this to if this is a delievery. Address could also be used for promotional marketing. Best to capture this as a string)

     - emailAddress as a string (Can be used to provide confirmation of an order. Also another avenue for promotional marketing. String would make sense as it is not a number and we won't be doing anytype of math with it)

     - cartItems as an array (This will hold all of the items that the customer has placed in their cart so far. Adding and removing items will be easy with the use of different array methods)
     
    savedPaymentMethods as an array of objects (customer can have one or more credit cards saved. The array of objects allows for storage of mutiple cards each with their own properties)

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
  name: "Philip Fry",
  address: "2999 Future Drive, New New York, NNY 00100",
  emailAddress: "fry@planetexpress.com",
  cartItems: ["Spinach Artichoke Dip", "Chicken Parmesan", "Slurm"],
  savedPaymentMethods: [
    { cardNumber: "9878 6546 3210 3698", expDate: "07-05", cvc: 010 },
  ],
};
