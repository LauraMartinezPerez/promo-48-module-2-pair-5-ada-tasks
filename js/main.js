'use strict'

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
     taskList.innerHTML += `<li class="lista">
     <input id="${task.id}" type="checkbox">${task.name}</li>`;
    }


/*     if (task.completed === true) {
      taskList.innerHTML += `<li class="lista cross-out" id="${task.id}">${task.name}</li>`
      } else {
          taskList.innerHTML += `<li class="lista" id="${task.id}">${task.name}</li>`
      } */
/*     for  (let i=0; i<tasks.length; i++) {
        taskList.innerHTML += `<li class="lista">${tasks[i].name}</li>`
    } */