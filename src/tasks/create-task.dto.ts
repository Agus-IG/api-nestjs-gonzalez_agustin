// create-task.dto.ts
import { IsString, IsNotEmpty } from 'class-validator';

// Clase para validar los datos de entrada al crear una tarea
export class CreateTaskDto {
  // Propiedades de la clase
  @IsString() // Validar que el valor sea una cadena de texto
  @IsNotEmpty() // Validar que el valor no este vacío
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  status: string;
}
