// Task1

//1. write a prgram to print first 10 numbers using for loop;

for ( var i=1; i<11; i++ ){

   console.log(i);

}
console.log("Loop has ended")
// Task2.

//2. write a program to print first 100 even number using for loop

for ( var i =1; i<101; i++ ){
  
    if ( i % 2 ===0){
        console.log(i);
    }

}
console.log("Loop has ended")



//Task3

//3. write program to print each character for this text 'Yerusha' using for loop;


var string = "Yerusha";
var size = 0;

for (var i of string ){

    console.log(i);
    size ++;
}
console.log(size);

// for (i=0; i<=string.length-1; i++ )
// {
//     console.log(string[i]);
// }

//4. write a program to get sum of first 10 number using for loop.
 
var sum = 0 ;
var n = 10;
for (var i =1; i<=n; i++){
  sum = sum+i;
}
console.log(sum);

//5. program squares for first 10 number using for loop.

var squares;
for(var i =1; i<=10; i++ ){

    squares = i**i;
}

console.log(squares);