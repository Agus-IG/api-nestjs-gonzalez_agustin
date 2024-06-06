import {
  Controller,
  Get,
  Param,
  Delete,
  Post,
  Body,
  Put,
  UsePipes,
  ValidationPipe,
  Patch,
} from '@nestjs/common';
import { TasksService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDto } from './create-task.dto';
import { UpdateTaskDto } from './update-task.dto';

// Decorador que indica que la clase es un controlador
@Controller('tasks')
export class TasksController {
  //Inyectar el repositorio de tareas
  constructor(private readonly tasksService: TasksService) {}

  //Ruta para obtener todas las tareas
  @Get()
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  //Ruta para obtener una tarea
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  // Ruta para crear una tarea
  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    const task = new Task();
    task.title = createTaskDto.title;
    task.description = createTaskDto.description;
    task.status = createTaskDto.status;
    return this.tasksService.create(task);
  }

  //Ruta para actualizar una tarea
  @Patch(':id')
  @UsePipes(new ValidationPipe())
  update(
    @Param('id') id: number,
    @Body() UpdateTaskDto: UpdateTaskDto,
  ): Promise<void> {
    const task = new Task();
    task.title = UpdateTaskDto.title;
    task.description = UpdateTaskDto.description;
    task.status = UpdateTaskDto.status;
    return this.tasksService.update(+id, task);
  }

  //Ruta para borrar una tarea
  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
