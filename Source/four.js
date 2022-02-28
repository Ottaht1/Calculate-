//write a function named calculate,that takes three arguments
//the decision and then two numbers.
// Eg. calculate ("add"4,5)should return 9
//calculate("subtract", 20,25) should return 15.
//the first argumnet must be either "add" or "subtract". If it's anything else, it should return "invalid decision".
//Eg. calculate ("ccx",55,2) should return "invalid decision".

function calculate(a, d, b) {
      if (a == "add")
            return d + b
      if (a == "subtract")
            return d - b
      else {
            return "invalid decision"
      }
}

console.log(calculate("add", 5, 9))
console.log(calculate("subtract", 15, 9))
console.log(calculate("subtractjjfjfjffj", 15, 9))

