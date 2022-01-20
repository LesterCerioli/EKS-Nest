import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { EmployeePayrollsService } from './employee-payrolls.service';
import { CreateEmployeePayrollDto } from './dto/create-employee-payroll.dto';
import { UpdateEmployeePayrollDto } from './dto/update-employee-payroll.dto';

@Controller()
export class EmployeePayrollsController {
  constructor(private readonly employeePayrollsService: EmployeePayrollsService) {}

  @MessagePattern('createEmployeePayroll')
  create(@Payload() createEmployeePayrollDto: CreateEmployeePayrollDto) {
    return this.employeePayrollsService.create(createEmployeePayrollDto);
  }

  @MessagePattern('findAllEmployeePayrolls')
  findAll() {
    return this.employeePayrollsService.findAll();
  }

  @MessagePattern('findOneEmployeePayroll')
  findOne(@Payload() id: number) {
    return this.employeePayrollsService.findOne(id);
  }

  @MessagePattern('updateEmployeePayroll')
  update(@Payload() updateEmployeePayrollDto: UpdateEmployeePayrollDto) {
    return this.employeePayrollsService.update(updateEmployeePayrollDto.id, updateEmployeePayrollDto);
  }

  @MessagePattern('removeEmployeePayroll')
  remove(@Payload() id: number) {
    return this.employeePayrollsService.remove(id);
  }
}
