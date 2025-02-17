import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  // récupère toutes les taches
  async findAll() {
    return this.prisma.task.findMany();
  }
  // delete supprime une tache via son id
  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
  // save gère là la fois a création mais également la l'update d'une tache
  async save(
    data:
      | Prisma.XOR<Prisma.TaskCreateInput, Prisma.TaskUncheckedCreateInput>
      | Prisma.XOR<Prisma.TaskUpdateInput, Prisma.TaskUncheckedUpdateInput>,
  ) {
    // si l'id n'est pas présent dans les données, c'est une création
    if (!('id' in data)) {
      return this.prisma.task.create({
        data: data as Prisma.TaskCreateInput,
      });
    }
    // sinon c'est une mise à jour
    const { id, ...updateData } = data as any;
    return this.prisma.task.update({
      where: {
        id,
      },
      data: updateData,
    });
  }
}
