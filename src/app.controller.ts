import { Controller } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {

  constructor(
    private readonly configService : ConfigService) {
  }
}
