import { Module } from '@nestjs/common';
import { HealthCheckController } from './health_check.controller';
import { HealthCheckService } from './health_check.service';

@Module({
  imports: [],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule {}
