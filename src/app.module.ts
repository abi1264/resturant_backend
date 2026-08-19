import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthCheckModule } from './modules/health_check/healthCheck.module';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, HealthCheckModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
