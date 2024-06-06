import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Decorador que indica que la clase es una entidad de la base de datos
@Entity()
export class Task {
  // Columna primaria autoincremental para el ID de la tarea
  @PrimaryGeneratedColumn()
  id: number;

  // Columna para el tiúlo de la tarea
  @Column()
  title: string;

  // Columna para la descripción de la tarea
  @Column()
  description: string;

  // Columna para el estado de la tarea
  @Column()
  status: string;
}
