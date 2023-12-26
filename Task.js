// console.log("This is Yerusha");

// var Name = "Yerusha Kandula"
// var age = 24;
// var x = null;
// var y= undefined;
// var isFallow = true;
// console.log(y);
// console.log(isFallow);

// var firstName = 4;
// console.log(firstName);

// var Name ="yerusha",
// surname="kandula",
//  age="24";

// console.log(Name+ surname+age);


// Arithmetic operators:


var a = 5;
var b = 10;

console.log( "a =", a , "b=", b  );

console.log("a + b =", a + b );
console.log("a - b =", a - b );
console.log("a * b =", a * b );
console.log("a / b =", a / b );
console.log("a % b =", a % b );
console.log("a ** b =",a** b );
console.log("a + b =", a+b );
console.log("a + b =", a+b );





// Unary operator.


var a = 5;
var b = 10;

console.log( "a =", a , "b=", b  );

// console.log("++a=", ++a);//6
// console.log("a++=", a++);
// console.log("a =", a);

// console.log("a--=", a--);
// console.log("a =", a);



//Assignment operators:

var a = 5;
var b = 10;

console.log( "a =", a , "b=", b  );

// a += 4; // a= a+4;

// console.log("a =", a); //9

// a -= 4; // a= a-4;
// console.log("a =", a); //1

// a *= 4; // a= a*4;
// console.log("a =", a); //20

// a /= 4; // a= a/4;
// console.log("a =", a); //1.25

// a %= 4; // a= a%4;
// console.log("a =", a); //1

// a **= 4; // a= a**4;
// console.log("a =", a); //625





//Comparison operators:

1. 
   " == " , " != "
var a = 5;
var b = 10;

console.log("a == b", a == b); //false.
console.log("a != b", a != b); //true.

2. 
    " == "

var a = 5;//number
var b = "5";//string


console.log("a == b", a == b); //true >>> Sees only value.

// console.log("a != b", a != b); //true.
// console.log("a != b", a != b); //true.

3. 
" === "
var a = 5;//number
var b = "9";//string


console.log("a === b", a === b); //false >>> See type and value.

3. 
" !== "
var a = 5;//number
var b = "5";//string


console.log("a !== b", a !== b); //false >>> Not type and value

4.
    " > "
    var a = 5;
    var b = 7;
    
    
    console.log("a > b", a > b);


      " >= "

    var a = 5;
    var b = 7;
    
    
    console.log("a >= b", a >= b);

5. 
    " < "

    var a = 5;
    var b = 7;
    
    
    console.log("a < b", a < b);

       " <= "
   
       var a = 5;
       var b = 7;
       
       
    console.log("a <= b", a <= b);

// Logical operators.

// Logical AND && >>
1. 

var a = 8;
var b = 7;

var cond1 = a > b; //true
var cond2 = a === 8 ; //true


console.log("cond1 && cond2 =", cond1 && cond2 );

2. 
var a = 8;
var b = 7;

var cond1 = a > b; //true
var cond2 = a === 9 ; //false


console.log("cond1 && cond2 =", cond1 && cond2 );

3. 
var a = 8;
var b = 7;

var cond1 = a > b; //true
var cond2 = a === 9 ; //false


console.log("cond1 && cond2 =", a > b &&  a===9 );


// Logical OR ||--

var a = 8;
var b = 7;

console.log("cond1 && cond2 =", a > b || a===9 );

// Logical NOT ! 

var a = 8;
var b = 7;

console.log("!(a < b ) =", !( a > b )  );

// For every expressions.


//Conditional statements:

// If statement:

// 1.>>>>>

var age = 15 ;

if (age >= 18 ) {
    console.log(" You can vote");
}

if (age < 18 ) {
    console.log(" You cannot vote");
}

// 2.>>>>>>>

var age = 18 ;

if (age >= 18 ) {
    console.log(" You can vote");
}

if (age < 18 ) {
    console.log(" You cannot vote");
}

// 3.>>>>
var mode = "dark";
var color;

if (mode === "dark" ){
    color = "black";
}

if (mode === "light" ){
    color = "white";
}

console.log(color);

var mode = "light";
var color;

if (mode === "dark" ){
    color = "black";
}

if (mode === "light" ){
    color = "white";
}

console.log(color);

// If-else statement:
1.

var mode ="light";
var color;

if (mode === "dark" ){
    color = "black";
} 
else {
    color ="pink";
}

console.log(color);
2.

var age = 24;

if ( age >= 18) {
    console.log("vote");
}
else
{
    console.log("Not vote");
}
3.

var num = 2;

if (num % 2 === 0){
    console.log(num, " is even");
}
else {
    console.log(num, "is odd");
}

// Else- if statement:

var mode = "blue";
 var color;

 if ( mode === "dark"){
    color ="black";
 }
else if ( mode === "blue")
{
    color = "blue";
}

else if ( mode === "pink")
{
    color = "pink"
}
else {
color = "orange";

}
console.log(color);

if ( mode === "dark"){ 
    console.log(mode);
}

// Ternary operator.

var age = 14;

var result = age >= 18 ? "adult" : "not adult" ;

console.log(result);

// or

var age = 24 ;

age >= 18? console.log("adult") : console.log("not adult");


// Practice questions.
1. 

var num = prompt("Enter a number");

if (num % 5 ===0){
    console.log(num, "is multiple of 5" );
}
else{
    console.log(num, "is NOT multiple of 5");
}

2. 
// JS Program.

var score = prompt("enter your score");
var grade;

if (score>=90 && score <=100){
  grade ="A" ;

}
else if (score >=70 && score <=89){
    grade ="B";
}
else if ( score >=60 && score <=69){
    grade = "C";
}
else if (score >=50 && score <=59){
    grade = "D";
}
else if (score >=0 && score<= 49){
    grade = "F";
}
 console.log ("According to your scores, your grade was: ", grade);