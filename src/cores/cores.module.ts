import { Module } from '@nestjs/common';
import { CoresService } from './cores.service';
import { CoresController } from './cores.controller';
import { CurrencyServiceService } from './currency-service/currency-service.service';

@Module({
  controllers: [CoresController],
  providers: [CoresService, CurrencyServiceService]
})
export class CoresModule {}
