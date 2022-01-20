import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityLogModule } from './activity-log/activity-log.module';
import { RhsModule } from './rhs/rhs.module';
import { DpsModule } from './dps/dps.module';
import { ActivityLogsModule } from './activity-logs/activity-logs.module';

@Module({
  imports: [ActivityLogModule, RhsModule, DpsModule, ActivityLogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
