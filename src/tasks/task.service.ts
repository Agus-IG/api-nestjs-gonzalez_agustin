import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

//Decorador que indica que la clase es un servicio
@Injectable()
export class TasksService {
  //Inyectar el repositorio de tareas
  constructor(
    @InjectRepository(Task)
    private tasksRepository: Repository<Task>,
  ) {}

  //Metodo para obtener todas las tareas
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  //Metodo para obtener una tarea
  findOne(id: number): Promise<Task> {
    return new Promise<Task>((resolve, reject) => {
      this.tasksRepository
        .findOne({ where: { id } })
        .then((task) => {
          if (!task) {
            reject(new Error(`Task with id ${id} not found`));
          } else {
            resolve(task);
          }
        })
        .catch((error) => reject(error));
    });
  }

  //Metodo para crear una tarea
  async create(task: Task): Promise<Task> {
    return this.tasksRepository.save(task);
  }

  //Metodo para actualizar una tarea
  async update(id: number, task: Task): Promise<void> {
    await this.tasksRepository.update(id, task);
  }

  //Metodo para borrar una tarea
  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
