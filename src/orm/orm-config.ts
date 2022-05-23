import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const ormConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST'),
    port: parseInt(configService.get('POSTGRES_PORT'), 10),
    username: configService.get('POSTGRES_USERNAME'),
    password: configService.get('POSTGRES_PASSWORD'),
    database: configService.get('POSTGRES_DATABASE'),
    entities: [
      'dist/**/*.entity.js'
    ],
    synchronize: false,
    migrations: ['./dist/migrations/**/*.js'],
    subscribers: ['./dist/subscriber/**/.js'],
    cli: {
      entitiesDir: 'src',
      migrationsDir: 'migrations',
      subscribersDir: 'subscriber'
    },
    keepConnectionAlive: true
  }),
  inject: [ConfigService],
};