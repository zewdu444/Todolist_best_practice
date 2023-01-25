import clearAllCompleted from './clearAllCompleted.js';
import createTask from './createTask.js';
import completeTask from './completeTask.js';

describe('clear All Completed task', () => {
  createTask('hello world');
  createTask('hello zewidu');
  createTask('hello tobby');
  createTask('hello microverse');
  completeTask(1, true);
  completeTask(3, true);
  test('clearAllCompleted should be exist ', () => {
    expect(clearAllCompleted).toBeDefined();
  });
  // object array length should be equal to 2
  test('object array should be equal to 2', () => {
    const clearcompleted = clearAllCompleted();
    expect(clearcompleted).toHaveLength(2);
  });
  // there should be no true value in object array
  test('shoud not have completed task with value of true', () => {
    expect(clearAllCompleted()).not.toEqual(expect.arrayContaining([
      expect.objectContaining({ completed: true }),
    ]));
  });
});