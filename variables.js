/*function isProductHigh(a,b,c) {
    let product = a*b*c;
   if (a*b*c > 25){
       return true;
   }
   else {
       return false;
   }
}

console.log(isProductHigh(5,5,1))
console.log(isProductHigh(300,200,100))*/


function distanceTravelled(a,b) {
    let value = a/b;
    if (a/b > 1000) {
        return true;
    }
    else {
        return false;
    }
}

console.log(distanceTravelled(2000,350))