import { Injectable } from '@nestjs/common';
import { CreateEmployeePayrollDto } from './dto/create-employee-payroll.dto';
import { UpdateEmployeePayrollDto } from './dto/update-employee-payroll.dto';

@Injectable()
export class EmployeePayrollsService {
  create(createEmployeePayrollDto: CreateEmployeePayrollDto) {
    return 'This action adds a new employeePayroll';
  }

  findAll() {
    return `This action returns all employeePayrolls`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employeePayroll`;
  }

  update(id: number, updateEmployeePayrollDto: UpdateEmployeePayrollDto) {
    return `This action updates a #${id} employeePayroll`;
  }

  remove(id: number) {
    return `This action removes a #${id} employeePayroll`;
  }
}
