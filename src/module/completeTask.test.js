import completeTask from './completeTask.js';
import createTask from './createTask.js';
import tasks from './taskStore.js';

describe('test for complete task', () => {
  createTask('hello world');
  createTask('hello zewidu');
  createTask('hello tobby');
  createTask('hello microverse');
  it('completeTask', () => {
    const complete = completeTask(2, true);
    expect(complete).toEqual(tasks);
  });

  it('completeIndex', () => {
    const complete = completeTask(3, true);
    expect(complete).toHaveLength(4);
  });
});
