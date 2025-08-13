let amigos = [];

function agregarAmigo() {
//voy a tener el valor dentro del input
let input = document.getElementById("amigo");
let nombre = input.value.trim(); // para eliminar los espacios en el inicio y final

//acá verifico que no este vacio
if (nombre == "") {
    alert('Por favor, inserte un nombre.');
    return;
}

//convertir primera letra en mayúscula y resto en minúsculas
    nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase();

//lo guardo adentro del array
amigos.push(nombre);

console.log(amigos);

//limpieza del input para que se escriban otros nombres
input.value = "";

//actualizo la lista en pantalla
    mostrarLista();

}

function mostrarLista() {
    //obtengo el elemento ul
    let listaAmigos = document.getElementById('listaAmigos');   

    //limpio el contenido
    listaAmigos.innerHTML = "";

    //uso el for para recorrer el array y agregar <li> para cada nombre
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }

}

function sortearAmigo() {
    //validar que haya amigos en el array
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    //generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    //obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    //mostrar el resultado en la lista de resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
