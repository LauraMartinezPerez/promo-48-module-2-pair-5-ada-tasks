"use strict";

const taskList = document.querySelector(".js-li");

const tasks = [
  { name: "Recoger setas en el campo", completed: false, id: 1 },
  { name: "Comprar pilas", completed: false, id: 2 },
  { name: "Poner una lavadora de blancos", completed: false, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];




const pintarTareas = () => {
  taskList.innerHTML = "";
  for (const torrezno of tasks) {
  if (torrezno.completed === false) {   
    taskList.innerHTML += `<li class="lista js-campo">
  <input type="checkbox" id=${torrezno.id} >
  ${torrezno.name}
  </li>`;}
  else if (torrezno.completed === true) {
    taskList.innerHTML += `<li class="lista cross-out">
    <input type="checkbox" id=${torrezno.id} >
    ${torrezno.name}
    </li>`;
  }
}};


const handleClick = (ev) => {
  
  const clickId = parseInt(ev.target.id);
  const buscar = tasks.find(xxx =>  xxx.id === clickId);
if (buscar.completed === false) {
  buscar.completed = true;}
  else if (buscar.completed === true) {
    buscar.completed = false;}
  pintarTareas ();
};
taskList.addEventListener("click", handleClick);
pintarTareas ();




























/* const bucle = () => { 
  for (const task of tasks) {
  // pintar la tarea en la lista
  taskList.innerHTML += `<li class="lista js-id${task.id}">
  <input id="${task.id}" type="checkbox" >
  ${task.name}
  </li>`;
}}
const handleClickList = (event) => {
  const taskId = parseInt(event.target.id); // Obtengo el id del checkbox clickado por la usuaria
  if (!taskId) return;
  const buscar = tasks.find((x) => x.id === taskId); // Busco el id del checkbox clickado por la usuaria en el array 
  buscar.completed = !buscar.completed; // Si la tarea tiene completed: true lo cambia al false y viceversa
  const listItem = document.querySelector(`.js-id${taskId}`); //Llamo al li clickado por la usuaria
  listItem.classList.toggle("cross-out", buscar.completed);
}
taskList.addEventListener("click", handleClickList);
bucle(); */



