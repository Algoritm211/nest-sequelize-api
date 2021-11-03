import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async create(userData: CreateUserDto): Promise<User> {
    return this.userRepository.create(userData, { returning: true });
  }
}
