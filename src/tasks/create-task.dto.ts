// create-task.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

// Clase para validar los datos de entrada al crear una tarea
export class CreateTaskDto {
  @ApiProperty(
    {
      description: 'Titulo de la tarea',
      example: 'Tarea 1',
    },
  )
  // Propiedades de la clase
  @IsString() // Validar que el valor sea una cadena de texto
  @IsNotEmpty() // Validar que el valor no este vacío
  title: string;

  @ApiProperty(
    {
      description: 'Descripción de la tarea',
      example: 'Descripción de la tarea 1',
    },
  )
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty(
    {
      description: 'Estado de la tarea',
      example: 'Pendiente',
    },
  )
  @IsString()
  @IsNotEmpty()
  status: string;
}
