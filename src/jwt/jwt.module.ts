import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env['JWT_SECRET_KEY'],
      signOptions: { 
        expiresIn: parseInt(process.env['JWT_TOKEN_LIFETIME'], 10)
      },
    }),
  ],
  providers: [
    JwtStrategy,
  ],
  exports: [
    JwtModule
  ]
})
export class YdrJwtModule {}
