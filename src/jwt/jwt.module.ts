import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET_KEY'),
        signOptions: { 
          expiresIn: parseInt(configService.get('JWT_TOKEN_LIFETIME'), 10)
        },
      }),
      inject: [ConfigService]
    })
  ],
  providers: [
    JwtStrategy,
  ],
  exports: [
    JwtModule
  ]
})
export class YdrJwtModule {}
