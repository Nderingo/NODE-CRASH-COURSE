
console.log(global);

global.setTimeout (() =>{
    console.log('in the timeout');
    clearInterval(int);
},3000);


const int = setInterval (()=>{
    console.log('in the timebeing')
},1000);