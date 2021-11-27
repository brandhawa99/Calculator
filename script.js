let values = [0,0];
let current = 0; 
let operator = ''; 

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
const screen = document.querySelector('p');
const one = document.querySelector('.one');
one.addEventListener('onclick',() =>{
    values[current] = values[current]*10+1

})

function updateText(){
    screen.innerH

}
