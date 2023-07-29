import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
/**
 * Routing logic for app module
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /* API for home page */
  @Get()
  home(): string {
    return this.appService.home();
  }
}
