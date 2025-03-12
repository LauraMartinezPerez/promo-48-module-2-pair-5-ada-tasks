"use strict";

const taskList = document.querySelector(".js-li");

/* const tasks = [
  { name: "Recoger setas en el campo", completed: false, id: 1 },
  { name: "Comprar pilas", completed: false, id: 2 },
  { name: "Poner una lavadora de blancos", completed: false, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
]; */

const GITHUB_USER = "";
const SERVER_URL = `https://dev.adalab.es/api/todo/${GITHUB_USER}`;

// - llamar al servidor
// fetch(SERVER_URL)
//   .then((Response) => Response.json())
//   .then((data) => {
//     const tasks = data.results;
//     for (const task of tasks) {
//       taskList.innerHTML += `<li class=lista><input type="checkbox" id=${task.id}>${task.name}</li>`;
//     }
//   });

function handleClick(event) {
  const idClicked = event.currentTarget.id;
  console.log(idClicked);
  if 
}

//SACAR EL BUCLE FUERA
function renderTasks(object) {
  for (const task of object) {
    // taskList.innerHTML += `<li class=lista><input type="checkbox" id=${task.id}>${task.name}</li>`;
    const liElement = document.createElement("li");
    liElement.setAttribute("class", "lista");
    taskList.appendChild(liElement);
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "checkbox");
    inputElement.setAttribute("id", task.id);
    liElement.appendChild(inputElement);
    const liContent = document.createTextNode(task.name);
    liElement.appendChild(liContent);

    inputElement.addEventListener("click", handleClick);
  }
}

//CONSTANTE PARA RECOGER LO DEL LOCAL STORAGE
const tasksLocalStorage = JSON.parse(localStorage.getItem("tasks"));

if (tasksLocalStorage !== null) {
  const tasks = tasksLocalStorage; //UTILIZO LA CONSTANTE PARA RECUPERAR LO DEL LOCAL STORAGE
  // si (existe el listado de tareas en Local Storage)
  // pinta la lista de tareas almacenadas en tasksLocalStorage
  renderTasks(tasks);
} else {
  //sino existe el listado de tareas en el local storage
  // pide los datos al servidor
  fetch(SERVER_URL)
    .then((response) => response.json())
    .then((data) => {
      const tasks = data.results;
      const saveTask = localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks(tasks);
    })
    .catch((error) => {
      console.error(error);
    });
}

/* const pintarTareas = () => {
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
pintarTareas (); */

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
