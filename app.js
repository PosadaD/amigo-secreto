// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosArray = [];
const nuevoAmigo = document.getElementById("amigo");
const listado = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");


function agregarAmigo(){
    const elementList = document.createElement("li")

    if(nuevoAmigo.value == ""){
        alert("Ingrese un nombre valido");
    }else{
        amigosArray.push(nuevoAmigo.value);
        nuevoAmigo.value = '';
        amigosArray.forEach((name) =>{
            elementList.textContent = name
            listado.appendChild(elementList);
        });
        resultado.innerText = "";
    }
}


function sortearAmigo(){
    let randomNumber = parseInt(Math.random() * amigosArray.length + 1);

    listado.innerText = "";

    resultado.innerText = `El nombre del amigo secreto es: "${amigosArray[randomNumber -1]}"`;
    
    amigosArray = [];
}
