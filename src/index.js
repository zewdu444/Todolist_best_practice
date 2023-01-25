import './style.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';
import tasks from './module/taskStore.js';
import dynamicDisplay from './module/readTask.js';
import createTask from './module/createTask.js';
import deleteTask from './module/deleteTask.js';
import updateTask from './module/updateTask.js';
import { storeTasks, getTasks } from './module/localStorage.js';
import completeTask from './module/completeTask.js';
import clearAllCompleted from './module/clearAllCompleted.js';

const insertButton = document.getElementById('insertbutton');
const inputTask = document.getElementById('inputtask');
const list = document.getElementById('list');
const listItem = document.getElementsByClassName('listitem');
const deleteItem = document.getElementsByClassName('deletebutton');
const moveItem = document.getElementsByClassName('movebutton');
const clearButton = document.getElementById('clearbutton');
// compare local storage and tasks array
window.addEventListener('load', () => {
  if (tasks.length === 0 && getTasks().length !== 0) {
    for (let i = 0; i < getTasks().length; i += 1) {
      if (getTasks()[i] !== null) {
        tasks.push(getTasks()[i]);
      }
    }
  }
  dynamicDisplay();
});
// used to store and display tasks
const updateDisplay = () => {
  createTask(inputTask.value);
  storeTasks(tasks);
  dynamicDisplay();
  inputTask.value = '';
};

// insert new task  by click
insertButton.addEventListener('click', () => {
  updateDisplay();
});
// insert new task  pressing enter button
inputTask.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    updateDisplay();
  }
});

// updating list in on selected list item
const listUpdate = (e) => {
  const selectedlist = document.getElementById(e.target.id);
  const deleteButton = selectedlist.querySelector(`#delete${e.target.id}`);
  const moveButton = selectedlist.querySelector(`#move${e.target.id}`);
  const editText = selectedlist.querySelector(`#text${e.target.id}`);
  const id = Number(e.target.id);

  for (let i = 0; i < listItem.length; i += 1) {
    listItem[i].style.backgroundColor = 'white';
    deleteItem[i].style.display = 'none';
    moveItem[i].style.display = 'inline-block';
  }
  selectedlist.style.backgroundColor = '#FFFECE';
  deleteButton.style.display = 'inline-block';
  moveButton.style.display = 'none';
  deleteButton.addEventListener('click', () => {
    deleteTask(id);
    storeTasks(tasks);
    dynamicDisplay();
  });
  selectedlist.addEventListener('input', () => {
    updateTask(id, editText.innerHTML);
  });
};

// updating input element when on click
const inputUpdate = (e) => {
  const id = e.target.id.toString();
  const index = Number(id.slice(5));
  const checkCompleted = document.getElementById(e.target.id);
  const editText = document.querySelector(`#text${index}`);
  if (checkCompleted.checked === true) {
    completeTask(index, true);
    editText.innerHTML = editText.innerHTML.strike();
    updateTask(index, editText.innerHTML);
    storeTasks(tasks);
  } else {
    completeTask(index, false);
    editText.innerHTML = editText.innerHTML.replace('<strike>', '');
    updateTask(index, editText.innerHTML);
    storeTasks(tasks);
  }
};

// delete and edit implementation
list.addEventListener('click', (e) => {
  if (e.target && e.target.nodeName === 'LI') {
    if (e.target.id) {
      listUpdate(e);
    }
    storeTasks(tasks);
  } else if (e.target && e.target.nodeName === 'INPUT') {
    inputUpdate(e);
  }
});

// loop through completed tasks

clearButton.addEventListener('click', () => {
  clearAllCompleted();
  dynamicDisplay();
});
