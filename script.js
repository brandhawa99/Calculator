

let values = [0,0];
let current = 0; 
let operator = ''; 

//Calculator display
const screen = document.querySelector('.screen-text');

//getAllNumbers
const numbers = document.querySelectorAll("#num");

//Get all operators
const op = document.querySelectorAll('#op');

function operate(operator, vals){
    if(operator == 'x'){
        return vals[0]*vals[1];
    }
    if(operator == '/'){
        return vals[0]/vals[1];
    }
    if(operator == '+'){
        return vals[0]+vals[1];
    }
    if(operator == '-'){
        return vals[0]-vals[1];
    }

}
function updateText(){
    screen.innerHTML = values[current];

}

//Number Event listeners
numbers.forEach((number) =>{
    number.addEventListener('click',() =>{
        values[current] = values[current]*10+parseFloat(number.value);
        updateText();
    })
})

//Operator Event Listener
op.forEach((oper) =>{
    oper.addEventListener('click',() =>{
        operator = oper.value; 
        current = 1;

    })
})

//Delete function 
function del(){
    // console.log(values[0]);
    let num = values[current];
    let stringNum = num.toString(); 
    stringNum = stringNum.slice(0,-1);
    values[current] = parseFloat(stringNum);
    if(isNaN(values[current])){
        values[current] =0; 
    }
    updateText();
}

function clear_all(){
    operator = '';
    current = 0; 
    values[0]  = 0 ; 
    values[1] = 0; 
    updateText();

}
//Other key event listener 
const remove = document.querySelector('.delete');
const multiply = document.querySelector('.multiply')
const clear = document.querySelector('.clear');


remove.addEventListener('click',del);
clear.addEventListener('click',clear_all)




