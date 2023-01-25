import deleteTask from './deleteTask.js';
import tasks from './taskStore.js';
import createTask from './createTask.js';

describe('test if the delete task active', () => {
  createTask('hello world');
  createTask('hello zewdu');
  createTask('hello tobby');
  createTask('hello microverse');

  it('should delete a task', () => {
    const task = deleteTask(3);
    const testValue = tasks;
    expect(task).toEqual(testValue);
  });

  it('should delete a task', () => {
    const task = deleteTask(3);
    expect(task).not.toContain({ completed: false, desc: 'hello tobby', index: 3 });
  });
});
