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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tareas') // Etiqueta para las rutas en Swagger
// Decorador que indica que la clase es un controlador
@Controller('tasks')
export class TasksController {
  //Inyectar el repositorio de tareas
  constructor(private readonly tasksService: TasksService) {}

  //Ruta para obtener todas las tareas
  @Get()
  @ApiOperation({ summary: 'Obtener todas las tareas' })
  @ApiResponse({ status: 200, description: 'Lista de todas las tareas', type: [Task] })
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  //Ruta para obtener una tarea
  @Get(':id')
  @ApiOperation({ summary: 'Obtener una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Detalles de la tarea', type: Task })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  // Ruta para crear una tarea
  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Crear una nueva tarea' })
  @ApiResponse({ status: 201, description: 'Tarea creada correctamente', type: Task })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
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
  @ApiOperation({ summary: 'Actualizar una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Tarea actualizada correctamente', type: Task })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  @ApiResponse({ status: 400, description: 'Datos de entrada inválidos' })
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
  @ApiOperation({ summary: 'Borrar una tarea por su ID' })
  @ApiResponse({ status: 200, description: 'Tarea borrada correctamente' })
  @ApiResponse({ status: 404, description: 'Tarea no encontrada' })
  remove(@Param('id') id: number): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
