function zooInventory(zoo) {
    // Create an empty array to store the sentences
    let result = [];
  
    // Loop over each animal in the zoo array
    for (let i = 0; i < zoo.length; i++) {
      let animal = zoo[i];        // animal is something like: ['King Kong', ['gorilla', 42]]
      let name = animal[0];       // The name: "King Kong"
      let species = animal[1][0]; // The species: "gorilla"
      let age = animal[1][1];     // The age: 42
  
      // Build the sentence
      let sentence = `${name} the ${species} is ${age}.`;
  
      // Add the sentence to the result array
      result.push(sentence);
    }
  
    // Return the final array of sentences
    return result;
  }

  let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
  ];
  
let a= zooInventory(myZoo);
console.log(a);