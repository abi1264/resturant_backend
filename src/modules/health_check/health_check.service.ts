import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthCheckService {
  displayHealth(): string {
    return 'My health is good';
  }
}
