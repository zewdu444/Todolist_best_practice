import createTask from './createTask.js';

describe('Add Tasks', () => {
  const testValue = [{ completed: false, description: 'hello world', index: 1 }];
  test('CreateTask function exist', () => {
    expect(createTask).toBeDefined();
  });
  // index 1
  test('Array strict equal to testValue', () => {
    expect(createTask('hello world')).toStrictEqual(testValue);
  });
  // index 2
  test('Array length should be 2 ', () => {
    expect(createTask('hi test')).toHaveLength(2);
  });
  // index 3
  test('the last element should have index value 3', () => {
    expect(createTask('add jest')).toEqual(expect.arrayContaining([
      expect.objectContaining({ index: 3 }),
    ]));
  });
});
