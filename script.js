//Eventos en JS: addEventListener

// Solo en querySelector
//como en CSS "." es para clases
//como en CSS "#" es para ids

const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo');
const input2 = document.querySelector('#calculo2'); 
const btn = document.querySelector('#btncalcular'); 
const pResult = document.querySelector('#result');

// addEventListener hace que el html esté más limpio 
form.addEventListener('submit', sumarInputValues); //no se le pone paréntesis

//Esta función la pusimos en el onclick de button 
function sumarInputValues(event){
    //El .preventDefault sirve para hacer que no se recargue la página 
    // cuando se mande el formulario 
    event.preventDefault(); 
    const result = Number(input1.value) + Number(input2.value);
    pResult.innerText = 'Resultado: ' + result;
};



  