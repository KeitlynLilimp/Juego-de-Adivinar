let numeroRandom = Math.floor(Math.random() * 100) + 1;

let oportunidades = 10;

function enviar() {
  oportunidades--;

  const numero = document.querySelector(".input");
  const texto = document.querySelector(".texto");
  const valor = numero.value;

  while (oportunidades > 0) {
    if (valor == numeroRandom) {
      oportunidades = 0;
      texto.innerHTML = "Ganaste! Ese era el numero";
      texto.style.color = "green";
      break;
    } else if (valor > numeroRandom) {
      texto.innerHTML = `Muy alto! Intenta de nuevo Te quedan ${oportunidades}`;
      texto.style.color = "red";

      break;
    } else {
      texto.innerHTML = `Muy bajo! Intenta de nuevo Te quedan ${oportunidades}`;
      texto.style.color = "red";

      break;
    }
  }

  if (oportunidades === 0 && valor != numeroRandom) {
    texto.innerHTML = `Lo lamento, se te acabaron las oportunidades! El numero correcto era ${numeroRandom}`;
  }
}

function reiniciar() {
  location.reload();
}
