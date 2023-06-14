const fechaHoy = document.getElementById("fechaHoy");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const seg = document.getElementById("seg");

const dias = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const setFecha = () => {
  let diaHoy = new Date();
  let ddString = diaHoy.getDay();
  let dd = diaHoy.getDate();
  let mm = diaHoy.getMonth();
  let yy = diaHoy.getFullYear();

  fechaHoy.innerText = `${dias[ddString]} ${dd} de ${meses[mm]} del ${yy}`;
};
setFecha();

setInterval(() => {
  let date = new Date();
  let horas = date.getHours();
  let minutos = date.getMinutes();
  let segundos = date.getSeconds();

  if (horas < 10) {
    horas = `0${horas}`;
  }

  if (minutos < 10) {
    minutos = `0${minutos}`;
  }

  if (segundos < 10) {
    segundos = `0${segundos}`;
  }

  hora.innerText = horas;
  min.innerText = minutos;
  seg.innerText = segundos;
}, 500);
