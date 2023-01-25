import createTask from './createTask.js';
import tasks from './taskStore.js';

describe('DOM Manipulation of MOCK', () => {
  createTask('hello world');
  createTask('hello zewidu');
  createTask('hello tobby');
  createTask('hello microverse');
  test('Check all list are display properly', () => {
    document.body.innerHTML = '<ul class="todolist" id="list"></ul>';
    const todoList = document.querySelector('#list');
    todoList.innerHTML = '';
    tasks.forEach((task) => {
      todoList.innerHTML += `<li id='${task.index}' class='listitem'>
      <input type="checkbox" class="checkcompleted" id='check${task.index}' ${task.completed ? 'checked' : 'unchecked'} />
      <p  class="textvalue" contenteditable="true" id='text${task.index}'>${task.description}</p>
      <button class='deletebutton'hidden id='delete${task.index}'><i class="fa-solid fa-trash" aria-hidden="true"></i></button>
      <button class='movebutton' id='move${task.index}'><i class="fa fa-ellipsis-v todolisticon" aria-hidden="true"></i></button>
     </li>
     <hr />`;
    });
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(tasks.length);
  });
});