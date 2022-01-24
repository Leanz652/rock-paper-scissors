
let seleccionUsuario;
let puntosUsuario = 0;
let puntosMaquina = 0;
const container = document.querySelector(".container-contador")
const h1Resultado = document.querySelector("div.container-main > h1");
const h2Resultado = document.querySelector("div.container-main > h2");
const opciones = document.querySelectorAll("div.opciones > img");

function selector(e){
  seleccionUsuario = (e.target.getAttribute("data-key"));
  playRound(seleccionUsuario, computerSelection());
}

opciones.forEach
  ((opcion) =>  
    {
       opcion.addEventListener
       ("click" , selector);
    }
); 



  function playRound (playerSelection, computerSelection) {

    h2Resultado.textContent = `Has elegido ${playerSelection} y la maquina ${computerSelection}`
  if (playerSelection ==='PIEDRA' && computerSelection === 'PIEDRA') {
        console.log("Empate");
  } else if (playerSelection === 'PIEDRA' && computerSelection === 'PAPEL') {
      console.log("PERDISTE");
      puntosMaquina++;
      document.querySelector(".maquina").textContent = ` Maquina: ${puntosMaquina}`;} 

      
  else if ((playerSelection === 'PIEDRA' && computerSelection === 'TIJERA')) {
    console.log("GANASTE");
    puntosUsuario++;
    document.querySelector(".humano").textContent = `Humano: ${puntosUsuario}`;

  }


if (playerSelection ==='PAPEL' && computerSelection === 'PAPEL'){
  console.log("Empate");
} else if (playerSelection === 'PAPEL' && computerSelection === 'TIJERA') {

  puntosMaquina++;
  document.querySelector(".maquina").textContent = ` Maquina: ${puntosMaquina}`;}

  else if (playerSelection === 'PAPEL' && computerSelection === 'PIEDRA') {
  console.log("GANASTE");
  puntosUsuario++;
  document.querySelector(".humano").textContent = ` Humano: ${puntosUsuario}`;
}

if (playerSelection ==='TIJERA' && computerSelection === 'TIJERA'){
  console.log("Empate");
 }else if (playerSelection === 'TIJERA' && computerSelection === 'PIEDRA') {
  console.log("PERDISTE");
  puntosMaquina++;
  document.querySelector(".maquina").textContent = ` Maquina: ${puntosMaquina}`;} 
  else if (playerSelection === 'TIJERA' && computerSelection === 'PAPEL') {
  console.log("GANASTE");
  puntosUsuario++;
  document.querySelector(".humano").textContent = ` Humano: ${puntosUsuario}`;
}

checkGanador();
}

function checkGanador(){
  if ((puntosMaquina == 5) || (puntosUsuario == 5) ) {

    opciones.forEach
    ((opcion) =>  
      {
         opcion.removeEventListener
         ("click" , selector );
      }
    ); 


      if (puntosMaquina == 5)
      {
        h1Resultado.textContent = "Has sido derrotado";
        h1Resultado.style.color = "Red";
      }
    
      if (puntosUsuario == 5)
      {
        h1Resultado.textContent = "!En hora buena! Has ganado la partida";
        h1Resultado.style.color = "Green";;
      }



    h2Resultado.textContent = "Jugar otra partida"
    h2Resultado.style.border = "Black 2px solid";
    h2Resultado.style.borderRadius = "10%";
    h2Resultado.addEventListener('click', _ => {location.reload();})
  }
}

function computerSelection() {

  resultado = Math.floor(Math.random() * 3)+1;
    switch (resultado) {
      case 1:
        return "PIEDRA"
      case 2:
        return "PAPEL"
      case 3:
        return "TIJERA"
    }
}




