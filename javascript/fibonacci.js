function fibonacci(num) {
  let array = [0, 1]
  if (num === 0) {
    return 0
  } else if (num === 1) {
    return 1
  } else
    for (let i = 2; i < num; i++) {
      array.push(array[i-1] + array[i-2])
    }
    return (array[num-1] + array[num-2])
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 5");
  console.log("=>", fibonacci(5));

  console.log("");

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));

  console.log("");

  console.log("Expecting: 233");
  console.log("=>", fibonacci(13));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// fibonacci - 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233

// declare an empty array
// using a for loop, where i = 0, i < var , i++
//  
//  array = array + (array[-1] + array[-2])
// return array[-1] + array[-2]
