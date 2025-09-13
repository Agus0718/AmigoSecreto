// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (!nombre) {
    alert("Por favor, escribe un nombre.");
    return;
  }

  amigos.push(nombre);
  input.value = "";
  mostrarLista();
}
function mostrarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${elegido}</strong></li>`;
}
function reiniciarJuego(){
    amigos= [];
    document.getElementById("listaAmigos").innerHTML ="";
    document.getElementById("resultado").innerHTML="";
}