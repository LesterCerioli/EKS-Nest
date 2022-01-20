import { Test, TestingModule } from '@nestjs/testing';
import { EmployeePayrollsService } from './employee-payrolls.service';

describe('EmployeePayrollsService', () => {
  let service: EmployeePayrollsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployeePayrollsService],
    }).compile();

    service = module.get<EmployeePayrollsService>(EmployeePayrollsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
