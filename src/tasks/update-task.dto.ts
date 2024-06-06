import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

// Clase para validar los datos de entrada al actualizar una tarea
export class UpdateTaskDto {
    // Propiedades de la clase
  @IsString() // Validar que sea una cadena de texto
  @IsNotEmpty() // Validar que no este vacía
  @IsOptional() // Validar que sea opcional
  title?: string; // Opcional '?'

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  status?: string;
}
