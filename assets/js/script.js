let numbers = document.querySelectorAll('.numbers');
let input = document.querySelector('#input')
let operators = document.querySelectorAll('.operators');
let equal = document.querySelector('.equal')
let clear = document.getElementById('clear');
let del = document.querySelector('.del')


for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    element.addEventListener('click', function(e){
        console.log(e.target.innerHTML)
        input.value += numbers[i].value 
        // console.log(e)

    })
}

for(let i = 0; i < operators.length;i++){
    const op = operators[i]
    op.addEventListener('click', function(e){
        if(e.target.value === "*"){
            console.log('Multi')
            input.value += e.target.value
        }
        if(e.target.innerHTML === "-"){
            console.log('Sub')
            input.value += e.target.innerHTML
        }
        if(e.target.innerHTML === "/"){
            console.log('Divide')
            input.value += e.target.innerHTML
        }
        if(e.target.innerHTML === "+"){
            console.log('Add')
            input.value += e.target.innerHTML
        }
        if(e.target.innerHTML === "%"){
            console.log('Add')
            input.value += e.target.innerHTML
        }
    })
    console.log(operators[i].value)
}

equal.addEventListener('click', function(e){
    input.value = eval(input.value)
    console.log(eval(input.value))
})

clear.addEventListener('click', function(){
    console.log(clear)
    input.value = " ";
})

del.addEventListener('click', function(e){
    input.value = input.value.slice(0, -1)
})
