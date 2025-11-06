// ... (imports)

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST!, // <-- Añade el "!"
      port: parseInt(process.env.DB_PORT!), // <-- Aquí también
      username: process.env.DB_USERNAME!, // <-- Añade el "!" [cite: 78]
      password: process.env.DB_PASSWORD!, // <-- Añade el "!" [cite: 79]
      database: process.env.DB_NAME!, // <-- Añade el "!" [cite: 82]
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  // ... (controllers y providers)
})
export class AppModule {}