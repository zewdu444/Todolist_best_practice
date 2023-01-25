import tasks from './taskStore.js';
import deleteTask from './deleteTask.js';
import { storeTasks } from './localStorage.js';

const clearAllCompleted = () => {
  let counter = 0;
  for (let k = 0; k < tasks.length; k += 1) {
    if (tasks[k].completed === true) {
      counter += 1;
    }
  }
  for (let i = 0; i < counter; i += 1) {
    for (let j = 0; j < tasks.length; j += 1) {
      if (tasks[j].completed === true) {
        deleteTask(tasks[j].index);
        storeTasks(tasks);
      }
    }
  }
};

export default clearAllCompleted;