// // YOUR CODE BELOW
// function mostVowels(char) {
//   for (let= 0;< char.length;+) {
//     if (
//       char === "a" ||
//       char === "e" ||
//       char ===  ||
//       char === "o" ||
//       char === "A" ||
//       char === "E" ||
//       char === "I" ||
//       char === "O" ||
//       char === "U"
//     ) {
//       count = count + 1;
//     }
//   }
//   return count;
// }

function isVowel(char) {
  return (
    char === "a" || "e" || "i" || "o" || "u" || "A" || "E" || "O" || "U" || "I"
  );
}

function mostVowels(char) {
  debugger;
  let count = 0;
  let arr = char.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];

    for (let j = 0; j < word.length; j++) {
      let characterm = word[j];
      if (isVowel(characterm)) {
        count = count + 1;
        console.log(count);
      }
    }
  }
}
mostVowels("I am a keeper with some real rhythms"); // => keeper
