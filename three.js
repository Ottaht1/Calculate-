//Write a function called appropriateAge that takes in firstName, lastName and age as arguments and if the age is above or equal to 18, the function should return “Hello firstName lastName, you are qualified”. Else it should return “Hello firstName lastName, you are not qualified”.


function appropriateAge(firstName, lastName, age) {
  if (age>=18) {
    return "Hello " + firstName +" "+ lastName + " you are qualified";
  }
   else{
    return "Hello " + firstName +" "+ lastName + " you are not qualified";
   }
   
}

console.log(appropriateAge("Uloma", "Ottah", 22));
console.log(appropriateAge("Uloma", "Ottah", 10));
