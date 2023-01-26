import tasks from './taskStore.js';

const updateTask = (index, description) => {
  tasks.filter((object) => object.index === index).forEach((object) => {
    object.description = description;
  });
  return tasks;
};

export default updateTask;