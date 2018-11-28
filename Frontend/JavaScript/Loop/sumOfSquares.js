   // Write a JavaScript program to write the sum of squares of the numbers from 101 to 150.

   
function sumOfSquares(){

    var result = 0;

    for (var i=101; i<=150; i++) {
       result += Math.pow(i, 2); 
    }    

    alert(result);

}