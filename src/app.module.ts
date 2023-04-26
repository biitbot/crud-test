import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employees } from './entities/employees';
import { EmployeesModule } from './employees/employees.module';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: 'root',
    password: 'ronaldr4',
    database: 'test',
    entities: [Employees],
    synchronize: true
  }), EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
