 // Write a JavaScript program that will read in an integer and sum its digits.

    function sumDigits (value) {
        var result = 0;

        while(value) {
            result = result + value%10;
            value = Math.floor(value/10);
        }
        
        console.log(result);
     }