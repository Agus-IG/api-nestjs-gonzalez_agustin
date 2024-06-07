import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// Clase para validar los datos de entrada al actualizar una tarea
export class UpdateTaskDto {
  @ApiProperty(
    {
      description: 'Titulo de la tarea',
      example: 'Tarea actualizada',
    },
  )
  // Propiedades de la clase
  @IsString() // Validar que sea una cadena de texto
  @IsNotEmpty() // Validar que no este vacía
  @IsOptional() // Validar que sea opcional
  title?: string; // Opcional '?'

  @ApiProperty(
    {
      description: 'Descripción de la tarea',
      example: 'Descripción actualizada',
    },
  )
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @ApiProperty(
    {
      description: 'Estado de la tarea',
      example: 'In progress',
    },
  )
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status?: string;
}
