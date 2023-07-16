const myObject = {
  name: 'Artur',
  age: 18,
  occupation: 'Programmer'
};

// 1. Using the Nullish Coalescing Operator: Write a function that takes an object as an argument and returns the value of the name property if it exists, or the string 'Unknown' if it doesn't. Use the Nullish Coalescing Operator to achieve this.

const nullish = (obj) => {
  console.log(`Hi! My name is ${(obj.name) ?? 'Unknown'}.`);
}

nullish(myObject);

// 2. Destructuring: Write a function that takes an object representing a person as an argument and returns a string with a greeting message using the person's name and age. Use destructuring to extract the values from the object.

const destructuring = ({
  name,
  age
}) => {
  console.log(`Hi! My name is ${name} and I'm ${age} years old.`);
}

destructuring(myObject);

// 3. Spread Operator and Rest Operator: Write a function that takes an indefinite number of arrays as arguments and returns a new array containing all the elements from all the arrays, without any duplicates. Use the Spread Operator and Rest Operator to achieve this.

const spreadrest = (...args) => {
  const array = [];
  args.forEach(arg => {
    arg.forEach(element => {
      if (!array.includes(element)) {
        array.push(element);
      }
    });
  });
  console.log(array);
}


spreadrest([1, 2, 3], [4, 5, 6]);

// 4. Filter and Map: Write a function that takes an array of numbers as an argument and returns a new array containing only the even numbers from the original array, but multiplied by 10. Use the filter and map methods to achieve this.

const filtermap = (arr) => {
  console.log(arr.filter(i => i % 2 === 0).map(i => i * 10));
}

filtermap([1, 2, 3, 4, 5, 6]);

// 5. Every and Some: Write two functions: one that takes an array of numbers as an argument and returns true if all the numbers are positive, and another that takes an array of numbers as an argument and returns true if at least one of the numbers is positive. Use the every and some methods to achieve this.

// 6. Find and Find Index: Write two functions: one that takes an array of numbers as an argument and returns the first even number in the array, and another that takes an array of numbers as an argument and returns the index of the first even number in the array. Use the find and findIndex methods to achieve this.

// 7. Reduce: Write a function that takes an array of numbers as an argument and returns the sum of all the numbers in the array. Use the reduce method to achieve this.

// 8. Promises: Write a function that uses fetch to send a request to an API (e.g., https://jsonplaceholder.typicode.com/users) and returns a Promise that resolves with the data from the response. Use Promises to handle asynchronous operations.
