

let values = [0,0];
let current = 0; 
let operator = ''; 

//Calculator display
const screen = document.querySelector('.screen-text');

//getAllNumbers
const numbers = document.querySelectorAll("#num");

//Get all operators
const op = document.querySelectorAll('#op');

function operate(){
    let reslut = 0; 
    if(operator == 'x'){
        reslut = values[0]*values[1];
    }
    if(operator == '/'){
        reslut = values[0]/values[1];
    }
    if(operator == '+'){
        reslut = values[0]+values[1];
    }
    if(operator == '-'){
        reslut = values[0]-values[1];
    }
    values[0] = reslut; 
    values[1] = 0; 
    current = 0; 
    updateText(); 
    current = 1; 
    return;

}
function updateText(){
    screen.innerHTML = values[current];

}

//Number Event listeners
numbers.forEach((number) =>{
    number.addEventListener('click',() =>{
        values[current] = parseFloat(values[current]+""+(number.value));
        updateText();
    })
})

//Operator Event Listener
op.forEach((oper) =>{
    oper.addEventListener('click',() =>{
        operator = oper.value; 
        current = 1;
        updateText();
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

//TODO: FIX DECIAML BUG 
function addDecimal(){
    // let number = values[current];
    // number = number+".0";
    // console.log(number);
    // values[current] = parseFloat(number);
    values[current] = parseFloat(values[current]+""+'.0')
    updateText();
}

function makeNegative(){
    values[current] = values[current]*-1; 
    updateText();
}

//Other key event listener 
const remove = document.querySelector('.delete');
const multiply = document.querySelector('.multiply')
const clear = document.querySelector('.clear');
const dot = document.querySelector('.decimal');
const evaluate = document.querySelector('.equal');
const negative = document.querySelector('.plus-minus')
const author = document.querySelector('.author');



negative.addEventListener('click',makeNegative)
remove.addEventListener('click',del);
clear.addEventListener('click',clear_all)
dot.addEventListener('click',addDecimal);
evaluate.addEventListener('click',operate);
author.addEventListener('click',() =>{
    values[current] = "BY: BRandhawa"
    updateText()
    setTimeout(clear_all,2000);

})


