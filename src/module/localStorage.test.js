import { storeTasks, getTasks } from './localStorage.js';
import createTask from './createTask.js';
import tasks from './taskStore.js';

describe('local storage', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  createTask('hello world');
  createTask('hello zewidu');
  createTask('hello tobby');
  createTask('hello microverse');

  test('is data stored in local storage', () => {
    storeTasks(tasks);
    expect(localStorage.getItem('tasks')).toEqual(JSON.stringify(tasks));
  });
  test('is json file parse and change to object array', () => {
    storeTasks(tasks);
    expect(getTasks()).toStrictEqual(tasks);
  });
});