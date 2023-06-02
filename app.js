let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

let manoUsuario = document.querySelector(".mano-usuaria");
let manoComputador = document.querySelector(".mano-computadora");

let puntajeUsuario = document.querySelector(".puntaje-usuaria p");
let puntajeComputador = document.querySelector(".puntaje-computadora p ");

let labelResultado = document.querySelector(".resultado");
let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputador = "";

let contadorUsuario = 0;
let contadorComputador = 0;
const eleccionComputadora = () => {
    let opcionlAzar = Math.floor(Math.random() * 3);

    if (opcionlAzar == 0) {
        manoComputador.src = "/assets/piedra_computadora.png";
        eleccionComputador = "piedra";
    } else if (opcionlAzar == 1) {
        manoComputador.src = "/assets/papel_computadora.png";
        eleccionComputador = "papel";
    } else {
        manoComputador.src = "/assets/tijera_computadora.png";
        eleccionComputador = "tijera";
    }
};


const resultado = () => {
    if (eleccionComputador == "piedra" && eleccionUsuario == "piedra") {
        labelResultado.textContent = "Empate";
    }
    if (eleccionComputador == "piedra" && eleccionUsuario == "tijera") {
        labelResultado.textContent = "Perdiste";
        contadorComputador += 1;
    }
    if (eleccionComputador == "piedra" && eleccionUsuario == "papel") {
        labelResultado.textContent = "Ganaste";
        contadorUsuario += 1;
    }
    if (eleccionComputador == "papel" && eleccionUsuario == "papel") {
        labelResultado.textContent = "Empate";
    }
    if (eleccionComputador == "papel" && eleccionUsuario == "piedra") {
        labelResultado.textContent = "Perdiste";
        contadorComputador++;
    }
    if (eleccionComputador == "papel" && eleccionUsuario == "tijera") {
        labelResultado.textContent = "Ganaste";
        contadorUsuario++;
    }
    if (eleccionComputador == "tijera" && eleccionUsuario == "tijera") {
        labelResultado.textContent = "Empate";
    }
    if (eleccionComputador == "tijera" && eleccionUsuario == "piedra") {
        labelResultado.textContent = "Ganaste";
        contadorUsuario++;
    }
    if (eleccionComputador == "tijera" && eleccionUsuario == "papel") {
        labelResultado.textContent = "Perdiste";
        contadorComputador++;
    }

    puntajeComputador.textContent = contadorComputador
    puntajeUsuario.textContent = contadorUsuario

    if (contadorUsuario === 3) {
        Swal.fire(
            "Juego Finalizado, ¡haz ganado!"
        )
        contadorComputador = 0
        contadorUsuario = 0
    }
    if (contadorComputador === 3) {
        Swal.fire(
            "Juego Finalizado, haz perdido"
        )

        contadorComputador = 0
        contadorUsuario = 0
    }


};






botonPiedra.onclick = () => {
    manoUsuario.src = "./assets/piedra_user.png";
    manoComputador.src = "./assets/piedra_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "piedra";
        manoUsuario.src = "./assets/piedra_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonTijera.onclick = () => {
    manoUsuario.src = "/assets/tijera_user.png";
    manoComputador.src = "/assets/tijera_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "tijera";
        manoUsuario.src = "/assets/tijera_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    });
};

botonPapel.onclick = () => {
    manoUsuario.src = "/assets/papel_user.png";
    manoComputador.src = "/assets/papel_computadora.png";
    labelResultado.textContent = "...";
    tablero.classList.add("jugando");
    setTimeout(() => {
        eleccionUsuario = "papel";
        manoUsuario.src = "/assets/papel_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    });
};

Swal.fire(
    "¿Te animas a jugar?",
    "Gana el primero que obtenga 3 puntos ;)",
    "success"
);