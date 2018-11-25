// Write a JavaScript program to randomly generate ten values, determine the largest value that you’ve generated, and print it to console or alert.


    var result=0;
    var random;

    for (var i=0; i<=10; i++){
        random = Math.random();

        if(random > result){
            result=random;
        }
        
        console.log(result);
    }

    