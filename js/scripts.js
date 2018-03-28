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



// business logic
var pigLatinReg =function(aString){
  var startWithV = /^[aeiou]+/i;
  var startWithC = /\b[bcdfghjklmnpqrstvwxyz]+/i;

  var result = '';

  if (aString.match(startWithV)){
    if(aString.length === 1){
      result = aString + 'ay';
    }else{
      result = aString + 'way';
    }
  }else if(aString.match(startWithC)){
    var con = aString.match(startWithC);
    var startIndex = con.length+1;
    result = aString.substr(startIndex) + con + 'ay';
  }else {
    result = aString;
  }
  return result;
};

var pigLatinSentence = function(sentence){
  var resultArray = [];
  var pigLatinSentence = sentence.split(" ");
  for (var i = 0; i < pigLatinSentence.length; i++){
    resultArray.push(pigLatinReg(pigLatinSentence[i]));
  }
  return resultArray.join(" ");
}

///////////////////////////////////////////////////////////////////////////////

// user interface logic
$().ready(function(){
  $(".pig-input").submit(function(e){
    e.preventDefault();

  const userInput = $("#pig-latin").val();
  let result = '';
  if (userInput){
    result = pigLatinSentence(userInput);
  }else{
    result = "Please enter something";
  }

  $(".output").append(result);

  });
});
