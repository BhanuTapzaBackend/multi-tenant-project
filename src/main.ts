import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
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
    .addApiKey(
      {
        type: 'apiKey',
        name: 'x-tenant-id', // The name of the header
        in: 'header',
        description: 'The tenant ID for the request',
      },
      'x-tenant-id', // A name for this security scheme
    )
    .addBearerAuth() // Essential for testing authenticated routes
    .addServer('http://localhost:8080', 'Local Development Server')
    // Add global headers
    .addSecurityRequirements('x-tenant-id')
    .build();

  const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(port);
}
bootstrap();