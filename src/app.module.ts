import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';

//Decorador que define el modulo principal de la aplicación
@Module({
  imports: [
    //Configuración de NestJS
    ConfigModule.forRoot(),
    //Configuración de TypeORM para usar SQLite como base de datos
    TypeOrmModule.forRoot({
      type: 'sqlite', //Tipo de base de datos
      database: 'tasks.db', //Nombre de la base de datos
      entities: [Task], //Entidades que se van a usar
      synchronize: true, //Sincronizar automáticamente el esquema de la base de datos
    }),
    TasksModule, //Modulo de tareas
  ],
})
export class AppModule {}
