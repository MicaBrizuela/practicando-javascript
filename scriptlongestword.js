//console.log("hello world");

// return thes longest word in a sentence.

/* 
###############

  My solution
  
###############
*/

let ExampleInput = "I went straight to the beach";

function findTheLongestWord(str){
  let word = str.split(" "); //split the words into an array
  let maxnumber = 0; // stores how many characters the longest word has
  let indexWord = 0; //stores index value of the word array
  let len = word.length; // how many elements there are in the array
  for (let i = 0; i < len; i++) {
    //console.log("cicle initiated");
    let len = word[i].length;
    if (len > maxnumber) { // if the length of the word is greater than the maximun lenght number stored........
      maxnumber = len; //change the variable value to compare to the other words
      indexWord = i; //store the index value of the longest word.
      //console.log(maxnumber + "v" + word[i] + "v" + indexWord);
    }
  }
  
  return word[indexWord]; //returns the element of the word array that has the most amount of characters.
}

//console.log(findTheLongestWord(ExampleInput));


/* 
##################

  Their solution
  
##################
*/

function longestWord(str) {
  let words = str.split(" ");
  let longestWord = ""; //heven't even thought about it, but this variable makes sense 

  for (let word of words) { //next time use this
    if (word.length > longestWord.length){
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(longestWord("I woke up early today"));
console.log(longestWord("I went straight to the beach"));

