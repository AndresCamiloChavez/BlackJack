const btnJugar = document.getElementById("inicio");
let btnPasar = document.getElementById("pasar");
let rondas = 1;

let jugadoresHTML = document.querySelectorAll(".valorJugador");

let jugador1 = new Jugador();
let jugador2 = new Jugador();
let jugador3 = new Jugador();
let jugador4 = new Jugador();

let jugadores = [jugador1, jugador2, jugador3, jugador4];

btnJugar.addEventListener("click", () => {
  for (let jugador of jugadores) {
    if (rondas > 2 && jugador.pasar != true) {
      jugador.pasar = confirm(
        `¿Quieres pasar Jugador? ${jugador.idJugador + 1}`
      );
      console.log(jugador.idJugador, jugador.pasar);
    }
    if (!jugador.pasar && jugador.perdio != true) {
      jugador.agregarCarta(cartaAleatoria());
      insertarValor(jugador);
      if (jugador.valorTotal() == 21) {
        console.log("GANADOR VAMOS", jugador.idJugador);
        jugadoresHTML[
          jugador.idJugador
        ].parentElement.children[1].classList.add(`ganador`);
        jugador.gano = true;
        btnJugar.style.display = "none";

        break;
      }
      if (jugador.valorTotal() > 21) {
        jugadorPerdio(jugador);
      }
    }
    if (jugador.valorTotal() == 21) {
      jugador.gano = true;
      break;
    } else if (rondaAcabo()) {
      let mayor = 0;
      let idJugadorGanador;
      let jugadorGanador = null;
      for (const jugador of jugadores) {
        if (!jugador.perdio) {
          console.log("Entro no perdio")
          console.log(jugador.idJugador, jugador.valorTotal());
          console.log("mayor: ", mayor);
          if (jugador.valorTotal() >= mayor) {
            mayor = jugador.valorTotal();
            idJugadorGanador = jugador.idJugador;
            jugadorGanador = jugador;
          }
        }
      }
      console.log("GANADOR!!! ", jugadorGanador);
      jugadoresHTML[
        jugadorGanador.idJugador
      ].parentElement.children[1].classList.add(`ganador`);
      btnJugar.style.display = "none";
      break;
    }
  }
  rondas++;
});

function cartaAleatoria() {
  let numeroR = Math.floor(Math.random() * (11 - 2 + 1) + 2);

  let carta = new Carta();
  switch (numeroR) {
    case 1:
      carta.nombre = "As";
      carta.valor = 1;
      carta.img = "imgs/A1.jpg";
      break;
    case 2:
      carta.nombre = "2";
      carta.valor = 2;
      carta.img = "imgs/2.jpg";
      break;
    case 3:
      carta.nombre = "3";
      carta.valor = 3;
      carta.img = "imgs/3.jpg";
      break;
    case 4:
      carta.nombre = "4";
      carta.valor = 4;
      carta.img = "imgs/4.jpg";
      break;
    case 5:
      carta.nombre = "5";
      carta.valor = 5;
      carta.img = "imgs/5.jpg";
      break;
    case 6:
      carta.nombre = "6";
      carta.valor = 6;
      carta.img = "imgs/6.jpg";
      break;
    case 7:
      carta.nombre = "7";
      carta.valor = 7;
      carta.img = "imgs/7.jpg";
      break;
    case 8:
      carta.nombre = "8";
      carta.valor = 8;
      carta.img = "imgs/8.jpg";
      break;
    case 9:
      carta.nombre = "9";
      carta.valor = 9;
      carta.img = "imgs/9.jpg";
      break;
    case 10:
      let num10 = Math.floor(Math.random() * (4 - 1 + 1) + 1);
      if (num10 == 1) {
        carta.nombre = "10";
        carta.img = "imgs/10.jpg";
      } else if (num10 == 2) {
        carta.nombre = "j";
        carta.img = "imgs/j.jpg";
      } else if (num10 == 3) {
        carta.nombre = "k";
        carta.img = "imgs/k.jpg";
      } else if (num10 == 4) {
        carta.nombre = "q";
        carta.img = "imgs/q.jpg";
      }
      carta.valor = 10;
      break;
    case 11:
      carta.nombre = "As";
      carta.valor = 11;
      carta.img = "imgs/A1.jpg";
      break;
  }
  return carta;
}

const rondaAcabo = () => {
  let jugadoresp = 0;
  for (const jugador of jugadores) {
    if (jugador.pasar == true) {
      jugadoresp++;
    }
  }
  if (jugadoresp > 3) {
    return true;
  } else {
    return false;
  }
};

async function insertarValor(jugador) {
  let tiempo = jugador.idJugador * 1000;
  let scr = jugador.cartas[jugador.cartas.length - 1].img;

  setTimeout(() => {
    jugadoresHTML[jugador.idJugador].parentElement.children[1].classList.add(
      `animateCarta${jugador.idJugador + 1}`
    );
    jugadoresHTML[jugador.idJugador].parentElement.children[1].removeAttribute(
      "src"
    );
    jugadoresHTML[jugador.idJugador].parentElement.children[1].setAttribute(
      "src",
      scr
    );
    jugadoresHTML[jugador.idJugador].innerHTML = jugador.valorTotal();
  }, tiempo);
  jugadoresHTML[jugador.idJugador].parentElement.children[1].classList.remove(
    `animateCarta${jugador.idJugador + 1}`
  );
}

const jugadorPerdio = (jugador) => {
  jugador.perdio = true;
  jugador.pasar = true;
  let tiempo = jugador.idJugador * 1000;
  setTimeout(() => {
    jugadoresHTML[jugador.idJugador].parentElement.parentElement.classList.add(
      "perdio"
    );
  }, tiempo);
};
