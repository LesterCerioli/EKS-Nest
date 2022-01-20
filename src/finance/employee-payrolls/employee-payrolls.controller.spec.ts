import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePayrollsController } from './employee-payrolls.controller';
import { EmployeePayrollsService } from './employee-payrolls.service';

describe('EmployeePayrollsController', () => {
  let controller: EmployeePayrollsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployeePayrollsController],
      providers: [EmployeePayrollsService],
    }).compile();

    controller = module.get<EmployeePayrollsController>(EmployeePayrollsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
