import { Module } from '@nestjs/common';
import { EmployeePayrollsService } from './employee-payrolls.service';
import { EmployeePayrollsController } from './employee-payrolls.controller';

@Module({
  controllers: [EmployeePayrollsController],
  providers: [EmployeePayrollsService]
})
export class EmployeePayrollsModule {}
