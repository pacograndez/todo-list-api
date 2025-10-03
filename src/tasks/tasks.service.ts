import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from 'generated/prisma';

@Injectable()
export class TasksService {
  public constructor(private readonly prismaService: PrismaService) {}

  public async getTasks(userId: string): Promise<Task[]> {
    return this.prismaService.task.findMany({
      where: { userId },
      orderBy: { createAt: 'desc' },
    });
  }

  public async createTask(
    userId: string,
    createTaskDto: CreateTaskDto,
  ): Promise<Task> {
    return this.prismaService.task.create({
      data: { title: createTaskDto.title, userId },
    });
  }

  public async updateTask(
    id: string,
    updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.prismaService.task.update({
      where: { id },
      data: updateTaskDto,
    });
  }

  public async deleteTask(id: string): Promise<Task> {
    return this.prismaService.task.delete({ where: { id } });
  }
}
