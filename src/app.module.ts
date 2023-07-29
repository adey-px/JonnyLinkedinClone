import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FeedModule } from './feed/feed.module';
/**
  @Module:
   imports - env vars using config, db params using typeorm
   controls - app module controller for routing
   providers - app module service for busing logic
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASS,
      database: process.env.POSTGRES_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    FeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

//
export class AppModule {}
