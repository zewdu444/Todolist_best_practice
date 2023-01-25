import tasks from './taskStore.js';

const completeTask = (index, completed) => {
  tasks.filter((object) => object.index === index).forEach((object) => {
    object.completed = completed;
  });
};
export default completeTask;