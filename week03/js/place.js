

const parrafo = document.querySelector(".copy");
const fecha = new Date();

const dia = fecha.getDate();
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

const horas = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();

parrafo.innerHTML = `<span>Last Modification: ${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}</span>`