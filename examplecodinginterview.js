/* write a function that returns the first recurring character in a string ABCA = A BCABA = B ABC=null  */

/* 
#################

   MY SOLUTION 

#################
*/

let sInput = "BCABA"; // This is a variable stand in for the user input.
let occurencesOfChar = []; // This array will contain the unrepeated characters on the input variable.

function recurringString(str) { //function that takes a string as a parameter.
  //console.log(str); // did str function correctly?
  //str = String(str); // do i need to force it to be a string?
  let len = str.length; //variable that stores the total number of indexes in the given string
  //console.log(len);
  for (let i = 0; i < len; i++) { // a for loop that has a condition where i needs to be less than variable len to keep the loop going. After every iteration i is added 1 unit.
    let char = str[i]; // takes a character from th estring using indexes.
    //console.log(char); / what character is being taken in this iteration?
    if (occurencesOfChar.includes(char)) { // checks if our previous array (occurencesOfChar) has that character (char) stored already.
      console.log(char); // if it's in there it shows the character on the console.
      break; // stops the loop
    } else { // if the array doesn't have the character stored then:
      if (i != len-1) { // checks that it's not the last loop:
        occurencesOfChar.push(char); //adds the character to the array
      } else { // if it is the last loop then there's no recurring character on the array so we show on console:
        console.log("no");
      }
    }
  }  
}

recurringString(sInput); // executing the function. It's placed here so that i can add more variables above it and not have any reference errors

/* 
first attempt: undefined is not a str
second attempt: what happens to a str with no recurring elements
third attempt: it needs to return a value not show it in console. but the idea is ok, can you come up with a solution without using array methods?

##################

  Their solution
  
##################

def first_recurring(given_string):
  counts = {} //dictionary or hash table {key:value; key:value}
  for char in given_string:
    if char in counts:
      return char
    else: //you can use else or not :D 
      counts[char] = 1 //value can be anything in this case is 1
  return None // if none of the others work that means there are no recurring characters
*/

