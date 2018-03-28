//business logic
// - The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
//   - Example Input: 3
//   - Example Output: 3
//
// - The program adds "ay" to single-letter words beginning with a vowel.
//   - Example Input: i
//   - Example Output: iay
//
// - For words beginning with a vowel, add "way" to the end.
//   - Example Input: orange
//   - Example Output: orangeway
//
// - For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
//   - Example Input: chris
//   - Example Output: rischay
//
// - If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
//   - Example Input: quite
//   - Example Output: itequay
//
// - For words beginning with "y", treat "y" as a consonant.
//   - Example Input: yahoo
//   - Example Output: ahooyay




//helper function to implement pattern3
const consonantIdenfier = (aString) => {
  let vowels = 'aeiouAEIOU';
  let str = aString.split("");
  let newStr = [];
  let consonantIndex;
  for(let index = 0; index < str.length; index ++){
    if(vowels.indexOf(str[index]) === -1){
      newStr.push(str[index]);
      consonantIndex = index + 1;
    }else{
      break;
    }
  }
  let consonant = aString.slice(0,consonantIndex);
  return aString.substr(consonantIndex)+ consonant + 'ay';
};

// a function to convert string to pig latins
// solution:
//   - list pattern as above
//   - replace with above patterns in target string
const pigLatin = (aString) => {
  let result = '';

  let pattern1 = "aeiouAEIOU";
  // let pattern2 = 'aeiouAEIOU';

  if (aString.length === 1){
    if (pattern1.includes(aString)){
      result = aString + 'ay';
    }
    // implement spec 2
  }else if(pattern1.includes(aString[0])){
    result = aString + 'way';
    // implement spec 3
  }else{
    result = consonantIdenfier(aString);
  }
  return result;
};

alert(pigLatin('characters'));

// //user interface logic
// $().ready(function(){
//   $(".pig-input").submit(e){
//     e.preventDefault();
//
//     // var pigInput = $("#pig-latin").val();
//   }
// });
