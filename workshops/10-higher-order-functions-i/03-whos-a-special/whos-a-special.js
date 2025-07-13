
function whosASpecial(pets){
    let result ='';
    pets.forEach((pet) =>{
        result = result + pet.name + ' the ' + pet.species + ' is very special! ';
    })
    return result.trim();
    
}

let specialPets = [{
    name: 'Mr. Binns',
    species: 'cat'
  }, {
    name: 'Pusheen',
    species: 'cat'
  }
];

let r = whosASpecial(specialPets);
