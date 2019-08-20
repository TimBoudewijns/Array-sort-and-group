const baseArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20,"12","13","12"];
const sortArray = baseArray.sort((a,b) => a-b);

let tempArray = [];
let newArray = [];

function organize(){
	for (var i = 0; i < baseArray.length; i++) { // Loop over array
		if (baseArray[i] === baseArray[i+1]) { // check if value is same as next one
			tempArray.push(baseArray[i+1]); // Fill the temp array
		} else {
			tempArray.push(baseArray[i]); // Add forgotten first value
			newArray.push(tempArray); // Add the aray tot final array
			tempArray = []; //Clear the temp array
		}
	}
}

organize();

console.log(newArray);










