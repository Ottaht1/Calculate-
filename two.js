// Write a function called isProductHigh that accepts two arguments “num1”, “num2” and “num3”. it should multiply the 3 numbers and then check if the product is higher than 25. If it’s higher than 25 it should return true else it should return false. 

//Example: isProductEven(5,2,5) should return true 
//isProductEven(3,1,2) should return false


function isProductHigh(a,b,c,d) {
//    let product = a*b*c;
   if (a*b*c > d){
      return true ;
   } 
   else { 
      return false;
   }
   
}

console.log(isProductHigh(5,3,1,25))
console.log(isProductHigh(50,3,31,50))