import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
    console.log("Hello Rigo from the console!");

  let who = ["El perro","Mi abuela","El cartero","Mi pájaro","Mi hermano","El vecino","Mi gato","Un fantasma"];

  let action = ["se comió", "se orinó en","aplastó","rompió","quemó","escondió","mojó","tiró por la ventana"];

  let what = ["mi tarea","mi teléfono","el coche","mi mochila","mi cuaderno","mi proyecto","mi computadora","mi"];
  
  let when = ["antes de la clase","mientras dormía","mientras hacía ejercicio","durante mi almuerzo","mientras rezaba","cuando iba saliendo","mientras me bañaba","cuando estaba en línea"];
let whoAleatorio = seleccionadorAleatorio(who) ;
let actionAleatorio = seleccionadorAleatorio(action);
let whatAleatorio = seleccionadorAleatorio(what) ;
let whenAleatorio = seleccionadorAleatorio(when);
let excuseElement = document.querySelector("#excuse");
excuseElement.innerHTML = `${whoAleatorio} ${actionAleatorio} ${whatAleatorio} ${whenAleatorio}`;

function seleccionadorAleatorio (lista) {
 let elementoAleatorio = Math.floor (Math.random() * lista.length);
 console.log(lista[elementoAleatorio]);
 return lista [elementoAleatorio];}
  console.log("Hello Rigo from the console!");
};
