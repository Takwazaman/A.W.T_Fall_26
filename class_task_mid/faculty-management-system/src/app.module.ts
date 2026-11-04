import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FacultiesModule } from './faculties/faculties.module.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'faculty_management_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
    FacultiesModule,
  ],
})
export class AppModule {}