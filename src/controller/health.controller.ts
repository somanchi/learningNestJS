import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Health } from 'src/entities/health.schema';

@Controller()
@ApiTags('health')
export class HealthController {
  @Get()
  getHello(): Health {
    return new Health();
  }
}
