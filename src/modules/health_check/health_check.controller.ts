import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { HealthCheckService } from './health_check.service';

@Controller('health-check')
export class HealthCheckController {
  constructor(private readonly health_checkService: HealthCheckService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getHealthStatus(): string {
    return this.health_checkService.displayHealth();
  }
}
