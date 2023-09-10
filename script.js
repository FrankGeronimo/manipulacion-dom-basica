const h1 = document.querySelector("h1");
const form = document.querySelector("#formulario");

const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const boton = document.querySelector("#btnCalcular");
const resultado = document.querySelector("#resultadoId")

 boton.addEventListener("click", manejoFormularioDOM);

 function manejoFormularioDOM (event) {
       const resultDeSuma = +input1.value + +input2.value;
//     event.preventDefault();


       resultado.innerHTML = "Resultado: " + resultDeSuma;
 }  

// boton.addEventListener("mouseover", manejoFormularioDOM);

// function manejoFormularioDOM () {
//     const resultDeSuma = +input1.value + +input2.value;
    


//     resultado.innerHTML = "Resultado: " + resultDeSuma;
// }  

