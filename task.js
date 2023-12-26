
// 1.write a logic for even or odd

// Task 1:


var x = 90/45;

if ( x % 2 === 0 ){

    console.log("Given number is even");
}
else 
{    
    console.log("Given number is odd");
}

//2.write logic for prime number

// Task2:

var number = 135;

if( number/125 === 1 && number/1 === 135)
{
  console.log("Given number is Prime number");
}
else 

if (number/135 !== 1 || number/1 == 135 )
 {
    console.log("Given number is Composite number");
}
 else
{   
    console.log("Given number is neither prime nor composite");
}

//3. write logic for marriage for both girl and boy

// Task3:

var gender = " H "
var age = 18 ;


if ( gender == " BOY " && age >= 21 )
{
    console.log(" Boy is eligible for marriage");
}

else 
if (gender === " GIRL " && age < 18) {
    console.log("Girl is not eligible for marriage");
}
else {

    console.log("No one is eligible");
}

// or

var gender = "GIRL"
var age = 21 ;

gender === "BOY" && age >= 21?
console.log("Boy is elegible for marriage"):
gender === "GIRL" && age >= 18?
console.log("Girl is elegible for marriage"):
gender !== "BOY" && gender !== "GIRL"?
console.log("please check"):
console.log("not eligible");



//4. write logic for month (correct month or not)

// Task4:


var month = " August " ;

switch (month) {
    case " January ":
        console.log(month);
        break;
        case " Febraury ":
        console.log(month);
        break;
        case " March ":
        console.log(month);
        break;
        case " April ":
        console.log(month);
        break;
        case " MAY ":
        console.log(month);
        break;
        case " June ":
        console.log(month);
        break;
        case " July ":
        console.log(month);
        break;
        case " August ":
        console.log(month);
        break;
        case " September ":
        console.log(month);
        break;
        case " october ":
        console.log(month);
        break;
        case " November ":
        console.log(month);
        break;
        case " December ":
        console.log(month);
        break;

    default: 
    console.log(" Not a month ");
}

