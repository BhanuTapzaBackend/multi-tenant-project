// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
// Import Swagger classes
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('server.port');

  // Swagger Configuration
  const config = new DocumentBuilder()
    .setTitle('Pharmacy Management API')
    .setDescription('API documentation for the multi-tenant pharmacy management system')
    .setVersion('1.0')
    .addBearerAuth() // Essential for testing authenticated routes
    .addServer(`http://localhost:${port}`, 'Local Development')
    .addTag('Tenants', 'Endpoints for company registration')
    .addTag('Authentication', 'Endpoints for user login')
    .addTag('Products', 'Endpoints for managing products (requires auth)')
    .build();
  
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document); // This sets up Swagger on the '/api-docs' route

  await app.listen(port);
}
bootstrap();