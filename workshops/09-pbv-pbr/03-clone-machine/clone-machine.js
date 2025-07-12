
function cloneMachine(object){
  console.log(object['name']);

    let newObj = {};
    newObj['name'] = object['name'] + 'Clone';

    newObj['species'] = object['species'];
    newObj['offspring'] =[];
    object['offspring'].push(newObj['name']);
    return newObj;
    

}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }
let a =cloneMachine(dolly);
let b =cloneMachine(a);
console.log(a);
console.log(b);
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}