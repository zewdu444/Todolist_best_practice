import updateTask from "./updateTask.js";
import createTask from "./createTask.js";
import tasks from "./taskStore.js";

describe('test for updateTask', ()=>{
    it('updateTask', ()=>{
    createTask('hello world');
  createTask('hello zewidu');
  createTask('hello tobby');
  createTask('hello microverse');
    const update = updateTask(2,"hello zewidu from ethopia");
    expect(update).toEqual(tasks);
  })

  it ('updateIndex', ()=>{
    const update = updateTask(3,"hello tobby from nigeria");
    expect(update).toHaveLength(4);
})
})
  




