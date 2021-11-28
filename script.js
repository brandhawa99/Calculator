

let values = [0,0];
let current = 0; 
let operator = ''; 

//Calculator display
const screen = document.querySelector('.screen-text');

//getAllNumbers
const numbers = document.querySelectorAll("#num");

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

//Other key event listener 
const remove = document.querySelector('.delete');
const multiply = document.querySelector('.multiply')


remove.addEventListener('click',del);




