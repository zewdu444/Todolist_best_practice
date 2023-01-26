import tasks from './taskStore.js';

const completeTask = (index, completed) => {
  tasks.filter((object) => object.index === index).forEach((object) => {
    object.completed = completed;
  });
  return tasks;
};
export default completeTask;