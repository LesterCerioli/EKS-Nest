import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployeePayrollDto } from './create-employee-payroll.dto';

export class UpdateEmployeePayrollDto extends PartialType(CreateEmployeePayrollDto) {
  id: number;
}
