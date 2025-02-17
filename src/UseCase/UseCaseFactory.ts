import { Injectable } from '@nestjs/common';
import GetAllTasksUseCase from './GetAllTasks/GetAllTasksUseCase';
import SaveTaskUseCase from './SaveTask/SaveTaskUseCase';
import DeleteTask from './DeleteTask/DeleteTask';
import TaskRepository from '../Repositories/TaskRepository';

@Injectable()
export default class UseCaseFactory {
  constructor(private readonly taskRepository: TaskRepository) {}
    /**
     * Méthode générique pour créer une instance d'un cas d'utilisation
     * @param useCase - La classe du cas d'utilisation à instancier
     * @returns Une instance du cas d'utilisation demandé
     */   
  create<test>(useCase: new (...args: any[]) => test): test {
    if (useCase === GetAllTasksUseCase) {
      return new GetAllTasksUseCase(this.taskRepository) as test;
    }
    if (useCase === SaveTaskUseCase) {
      return new SaveTaskUseCase(this.taskRepository) as test;
    }
    if (useCase === DeleteTask) {
      return new DeleteTask(this.taskRepository) as test;
    }
    throw new Error(`UseCase non reconnu : ${useCase}`);
  }
}
