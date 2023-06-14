const spanMilisegundos = document.getElementById("milisegundos");
const spanSegundos = document.getElementById("segundos");
const spanMinutos = document.getElementById("minutos");
const spanHoras = document.getElementById("horas");

const btnPlayCrono = document.getElementById("btnPlayCrono");
const btnPauseCrono = document.getElementById("btnPauseCrono");

let ms = "0" + 0;
let sec = "0" + 0;
let min = "0" + 0;
let hr = "0" + 0;

let startTimer = null;

const play = () => {
  console.log("clicks");
  btnPlayCrono.setAttribute("disabled", "");
  btnPauseCrono.removeAttribute("disabled");
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;

    if (ms === 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      ms = "0" + 0;
    }

    if (sec === 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }

    if (min === 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    putValue();
  }, 50);
};

const stop = () => {
  btnPauseCrono.setAttribute("disabled", "");
  btnPlayCrono.removeAttribute("disabled");
  clearInterval(startTimer);
};

const putValue = () => {
  spanMilisegundos.innerHTML = ms;
  spanSegundos.innerHTML = sec;
  spanMinutos.innerHTML = min;
  spanHoras.innerHTML = hr;
};

btnPlayCrono.addEventListener("click", () => {
  play();
});

btnPauseCrono.addEventListener("click", () => {
  stop();
});
