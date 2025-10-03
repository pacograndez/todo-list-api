import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CreateTaskDto } from './dtos/create-task.dto';
import { UpdateTaskDto } from './dtos/update-task.dto';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Request } from 'express';

interface AuthRequest extends Request {
  user: { id: string };
}

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  public constructor(private readonly tasksService: TasksService) {}

  @Get()
  getTasks(@Req() req: AuthRequest) {
    const userId = req.user.id;
    return this.tasksService.getTasks(userId); // 'This action returns all tasks';
  }

  @Post()
  createTask(@Req() req: AuthRequest, @Body() createTaskDto: CreateTaskDto) {
    const userId = req.user.id;
    return this.tasksService.createTask(userId, createTaskDto); // 'This action adds a new task';
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    console.log(id, updateTaskDto);
    return this.tasksService.updateTask(id, updateTaskDto); // 'This action updates a task';
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    console.log(id);
    return this.tasksService.deleteTask(id); // 'This action deletes a task';
  }
}
