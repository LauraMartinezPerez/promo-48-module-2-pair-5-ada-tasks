"use strict";

const taskList = document.querySelector(".js-li");

const tasks = [
  { name: "Recoger setas en el campo", completed: true, id: 1 },
  { name: "Comprar pilas", completed: true, id: 2 },
  { name: "Poner una lavadora de blancos", completed: true, id: 3 },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
    id: 4,
  },
];

for (const task of tasks) {
  // pintar la tarea en la lista

  // if (task.completed === true) {
  //     taskList.innerHTML += `<li class="lista cross-out" id="${task.id}">${task.name}</li>`
  //     } else {
  //         taskList.innerHTML += `<li class="lista" id="${task.id}">${task.name}</li>`
  //     }
  taskList.innerHTML += `<li class="lista">
  <input id="${task.id}" type="checkbox">
  ${task.name}
  </li>`;
}

/*
Cuando se haga click sobre un elemento de la lista
 - saber qué elemento se ha clickado
 - tachar el elemento
 -  añadir completed: true

*/

const handleClickList = (event) => {
  const taskId = parseInt(event.target.id);
  if (!taskId) return;
  tasks.find((task) => {
    if (task.id) {
    }
    task.id = true;
    taskList.innerHTML = `<li class="lista cross-out">
  <input id="${task.id}" type="checkbox">
  ${task.name}
  </li>`;
  });
};

taskList.addEventListener("click", handleClickList);

/*     for  (let i=0; i<tasks.length; i++) {
        taskList.innerHTML += `<li class="lista">${tasks[i].name}</li>`
    } */
