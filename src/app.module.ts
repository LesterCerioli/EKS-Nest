import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { RhsModule } from './rhs/rhs.module';
import { DpsModule } from './dps/dps.module';
import { ActivityLogsModule } from './activity-logs/activity-logs.module';
import { CoresModule } from './cores/cores.module';

@Module({
  imports: [ActivityLogModule, RhsModule, DpsModule, ActivityLogsModule, CoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
