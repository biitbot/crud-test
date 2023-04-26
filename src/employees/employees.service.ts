import { Injectable, Param, ParseIntPipe, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employees } from 'src/entities/employees';
import { CreateEmployeesParams, UpdateEmployeesParams } from 'src/utils/types';
import { Repository } from 'typeorm';

//Services are use to define the methods (or logic) that the controller will need to invoke 
//basically the service class is responsible of all the business logic
//Example by Ronald: Everything that has to do with creating users or calling an external API should be on this layer
@Injectable()
export class EmployeesService {

    //By chatGPT: a Repository is a class that encapsulates the logic for interacting with a particular data model.
    //Repository class might be created to encapsulate the logic 
    //for querying and updating the user data. The UserRepository class would provide methods 
    //such as findById(), createUser(), updateUser(), and deleteUser(), which the 
    //application code could use to interact with the database.
    constructor(
        @InjectRepository(Employees)
        private employeesRepository: Repository<Employees>,
    ) { }

    findEmployees() {
        return this.employeesRepository.find();

    }

    createEmployees(employeesDetails: CreateEmployeesParams) {
        const newEmployees = this.employeesRepository.create({ ...employeesDetails });
        this.employeesRepository.save(newEmployees);

    }

    updateEmployees(id: number, updateEmployeesDetails: UpdateEmployeesParams) {
       return this.employeesRepository.update({ id }, { ...updateEmployeesDetails });

    }

    deleteEmployees(id: number){
        return this.employeesRepository.delete({id});
    }

}
