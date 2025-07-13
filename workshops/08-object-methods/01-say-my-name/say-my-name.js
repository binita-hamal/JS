// YOUR CODE BELOW

const me={
    name:'bini',
    getGreeting:function(){
        return `Hi, my name is ${me.name}.`
    }
}

console.log(me.name); // 'Kat'
me.getGreeting(); // => 'Hi, my name is Kat.'