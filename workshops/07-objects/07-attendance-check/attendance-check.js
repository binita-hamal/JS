let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW

function classCheck(day){
    let arr=[];
    for(let i=0;i<classRoom.length;i++){

        let studentObj = classRoom[i];
        let studentName = Object.keys(studentObj)[0];

        let attendance = studentObj[studentName]

        for(let j=0; j<attendance.length; j++){
            if(attendance[j][day] ===true){
                arr.push(studentName);
                break;
            }
        }
      

    }
    return arr;

}

let c=classCheck('Monday'); // => ['Marnie', 'Shoshanna']
console.log(c);