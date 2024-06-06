import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TasksService } from './task.service';
import { TasksController } from './tasks.controllers';

//Decorador que define el modulo principal
@Module({
    //Inyectar el repositorio de tareas
    imports: [TypeOrmModule.forFeature([Task])],
    //Inyectar el servicio de tareas
    providers: [TasksService],
    //Inyectar el controlador de tareas
    controllers: [TasksController],
})
export class TasksModule {}
