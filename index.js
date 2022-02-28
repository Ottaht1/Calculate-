// function ** calculate age
function calculateAge(startYear,endYear) {
    if (!endYear){
        return new Date().getFullYear() - startYear
    }
    return endYear - startYear
}
let age = calculateAge(2000, 2012)
console.log(age)
let secondAge = calculateAge(2000)
console.log(secondAge) 



