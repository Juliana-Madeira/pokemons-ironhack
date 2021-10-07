let count = 1  //como um "contador"



function render (){
    let container = document.getElementById ('pokemon'); 
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

let prev = document.getElementById ('prev');
let next = document.getElementById ('next');

prev.onclick = function (){
    if (count > 1){
        count = count - 1 //decrementa um count, porque volta 1, anterior
        render ()
    }
    
}

next.onclick = function (){
    if (count < 650){
        count = count + 1 //incrementa um count, porque anda mais 1 pra frente, próximo
        render ()
    }
    
}


render ()



//let

//const 