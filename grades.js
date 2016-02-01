var numberOfA = 0;
var numberOfB = 0;
var numberOfC = 0;
var numberOfD = 0;
var numberOfF = 0;

//This is the array we are given:

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

for (var i = 0; i < scores.length; i++) { 
	if (scores[i] >= 91) {
		numberOfA++;
		console.log("A grade", numberOfA);	
	}  else if (scores[i] >= 81 && scores[i] <= 90) {
		   numberOfB++;
		   console.log("B grade", numberOfB);
	   } else if (scores[i] >= 71 && scores[i] <= 80) {
	   	    numberOfC++;
	   	    console.log("C grade", numberOfC);
	   	 }  else if(scores[i] >= 61 && scores[i] <= 70) {
		   	 	  numberOfD++;
		   	 	  console.log("D grade", numberOfD); 
		   	 	}    else if(scores[i] <= 60) {
		   	 	    	numberOfF++;
		   	 	    	console.log("F grade", numberOfF);
		   	 	    }	   	 	    	   	          
	}
//Use console.log to output the following criteria:


//How many of each grade?
console.log("Total of A grades is ", numberOfA);
console.log("Total of B grades is ", numberOfB);
console.log("Total of C grades is ", numberOfC);
console.log("Total of D grades is ", numberOfD); 
console.log("Total of F grades is ", numberOfF);

  //need to add results of above to a new array??


//What is the lowest grade?

//Math.min.apply(null, arr) from stack overflow

for (var i = 0; i < scores.length; i++) { 
   var minimum = Math.min.apply(null, scores); 
   console.log("Minimum Score is ", minimum);
}
   
   //What is the highest grade?

for (var i = 0; i < scores.length; i++) { 
   var maximum = Math.max.apply(null, scores); 
   console.log("Maximum Score is ", maximum);
}
 






