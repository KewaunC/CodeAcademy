const input = "turpentine and turtles".toLowerCase();
const vowels = ["a", "e", "i", "o", "u"];

let resultArray = [];
// let resultString = resultArray.join().toUpperCase()

for (let i = 0; i < input.length; i++) {
  if (input[i] === "e" || input[i] === "u") {
    resultArray.push(input[i]);
  }
   for (let v = 0; v < vowels.length; v++) {
    if (input[i] === vowels[v]) {
      resultArray.push(vowels[v]);
    }
  }
} 
