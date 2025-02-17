import { BadRequestException, Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { UseCase } from '../../index';
import SaveTaskDto from './SaveTaskDto';
import TaskRepository from '../../Repositories/TaskRepository';

@Injectable()
export default class SaveTaskUseCase
  implements UseCase<Promise<Task>, [dto: SaveTaskDto]>
{
  constructor(private readonly taskRepository: TaskRepository) {}

  async handle(dto: SaveTaskDto) {
    try {
      if (!dto.name || dto.name.trim() === '') {
        throw new BadRequestException('Le nom de la tâche est requis.');
      }

      return this.taskRepository.save({
        id: dto.id,
        name: dto.name
      });
      
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
