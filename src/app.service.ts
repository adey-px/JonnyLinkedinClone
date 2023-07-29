import { Injectable } from '@nestjs/common';
/**
 Business logic for app module
  - same service provider in module
 */
@Injectable()
export class AppService {
  home(): string {
    return 'Hello World...';
  }
}
