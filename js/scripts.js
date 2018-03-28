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


//



// a function to convert string to pig latins
// solution:
//   - list pattern as above
//   - replace with above patterns in target string
const pigLatin = (aString) => {
  let result = '';
  let pattern1 = "/^[aeiouAEIOU]/";
  if (aString.length === 1){
    if (pattern1.includes(aString)){
      result = aString + 'ay';
    };
  }
  return result;
}

alert(pigLatin('i'));



//
// $().ready(function(){
//   $(".pig-input").submit(e){
//     e.preventDefault();
//
//     // var pigInput = $("#pig-latin").val();
//   }
// });
