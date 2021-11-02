import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { usersProvider } from './user.provider';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, usersProvider],
})
export class UserModule {}
