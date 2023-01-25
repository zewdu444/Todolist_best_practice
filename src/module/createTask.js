import tasks from './taskStore.js';

const createTask = (description) => {
  const task = {};
  const lastTask = tasks.length;
  task.description = description;
  task.completed = false;
  task.index = lastTask + 1;
  tasks.push(task);
  return tasks;
};

export default createTask;