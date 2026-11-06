import * as taskRepository from '../repositories/taskRepo.js';

export async function getAllTasks(completed) {
  // no filter means return everything
  const filter = {};

  // the query string comes in as text, so turn it into a real true or false
  if (completed !== undefined) {
    filter.completed = completed === 'true';
  }

  return taskRepository.findAll(filter);
}

export async function createTask(newTask) {
  return taskRepository.create(newTask);
}
