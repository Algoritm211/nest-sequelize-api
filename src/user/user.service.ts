import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: typeof User,
  ) {}

  async create(user: IUser): Promise<User> {
    // @ts-ignore
    return this.userRepository.create<User>(user, { returning: true });
  }
}
