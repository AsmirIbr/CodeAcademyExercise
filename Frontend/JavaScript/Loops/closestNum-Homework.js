// Write a function that accepts two numbers N and X. Find the closest number bigger than N that is TOTALLY DIFFERENT than the number X. A number is TOTALLY DIFFERENT from another if every digit in the first number is different than every digit of the second number. You are not permitted to use arrays or matrices (we haven’t learned them yet). It’s ok to write subprocedures (helper functions that get called in your main function).

function closestNum(X, N){

	if(X > N){
		console.log("X should be less than N");

	} else if (X === N){
        console.log("X and M is same number")

    } else{
		while(X < N){
			X++;

			if(compare(X, N) === false){
				console.log(X);

				break;
			}
		}
	}
}

function compare(X, N){
	var match = false;

	while (X > 0) {
		var digitX = X % 10;
		X = Math.floor(X/10);
		var tempN = N;

		while(N > 0){
			var digitN = N % 10;
			N = Math.floor(N/10);

			if(digitX == digitN){
				return true;
			}
		}
        N = tempN;
	}
	return match;
}