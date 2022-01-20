import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ActivityLogsService } from './activity-logs.service';
import { CreateActivityLogDto } from './dto/create-activity-log.dto';
import { UpdateActivityLogDto } from './dto/update-activity-log.dto';

@Controller()
export class ActivityLogsController {
  constructor(private readonly activityLogsService: ActivityLogsService) {}

  @MessagePattern('createActivityLog')
  create(@Payload() createActivityLogDto: CreateActivityLogDto) {
    return this.activityLogsService.create(createActivityLogDto);
  }

  @MessagePattern('findAllActivityLogs')
  findAll() {
    return this.activityLogsService.findAll();
  }

  @MessagePattern('findOneActivityLog')
  findOne(@Payload() id: number) {
    return this.activityLogsService.findOne(id);
  }

  @MessagePattern('updateActivityLog')
  update(@Payload() updateActivityLogDto: UpdateActivityLogDto) {
    return this.activityLogsService.update(updateActivityLogDto.id, updateActivityLogDto);
  }

  @MessagePattern('removeActivityLog')
  remove(@Payload() id: number) {
    return this.activityLogsService.remove(id);
  }
}
