import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración Swagger
  const config = new DocumentBuilder()
    .setTitle('Administrador de Tareas') // Título de la documentación
    .setDescription('La API de Administrador de Tareas') // Descripción de la API
    .setVersion('1.0') // Versión de la API
    .build(); // Construir la configuración
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Ruta de la documentación Swagger

  await app.listen(3000); // Iniciar la aplicación en el puerto 3000
}
bootstrap();
