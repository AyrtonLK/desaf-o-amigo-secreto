let listaAmigos = [];

function agregarAmigo() {
//voy a tener el valor dentro del input
let input = document.getElementById("amigo");
let nombre = input.value.trim(); // para eliminar los espacios en el inicio y final

//acá verifico que no este vacio
if (nombre == "") {
    alert('Por favor, escribe un nombre.');
    return;
}

// Convertir primera letra en mayúscula y resto en minúsculas
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

//lo guardo adentro del array
listaAmigos.push(nombre);

console.log(listaAmigos);

//limpieza del input para que se escriban otros nombres
input.value = "";

}