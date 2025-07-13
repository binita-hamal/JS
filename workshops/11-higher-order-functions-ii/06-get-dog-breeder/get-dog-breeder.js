

function getDogBreeder(defaultName,defaultAge){
    return function dogBreeder(a=defaultName, b=defaultAge) {
    let name = "Steve";
    let age = 0;
  
    if (typeof a === "string") {
      name = a;
      if (typeof b === "number") {
        age = b;
      }
    } else if (typeof a === "number") {
      age=a;
      name=defaultName;
    }
    return {
      name: name,
      age: age,
    };
  }
}