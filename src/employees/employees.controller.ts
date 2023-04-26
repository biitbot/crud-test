import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateEmployeesDto } from './dtos/CreateEmployees.dto';
import { EmployeesService } from './employees.service';
import { UpdateEmployeesDto } from './dtos/UpdateEmployee.dto';

//Controllers are use to create routes for the service to use those routes
//The Controller is typically use for handling incoming HTTP requests and sending responses 
//Example by Ronald: Extracting query parameters or validating a request
@Controller('employees')
export class EmployeesController {

    constructor(private employeesService: EmployeesService) { }

    @Get()
    getEmployees() {
        return this.employeesService.findEmployees();
    }

    @Post()
    createEmployees(@Body() createEmployeeDto: CreateEmployeesDto) {
        return this.employeesService.createEmployees(createEmployeeDto);
    }

    @Put(':id')
    updateEmployeeById(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateEmployeesDto: UpdateEmployeesDto,
    ) {
        return this.employeesService.updateEmployees(id, updateEmployeesDto);
    }

    @Delete(':id')
    deleteEmployees(@Param('id', ParseIntPipe) id: number){
        return this.employeesService.deleteEmployees(id);

    }



}
