import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { IUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private readonly userRepository: typeof User,
  ) {}

  async getAll() {
    return this.userRepository.findAll();
  }

  async getOne(id: string) {
    const user = await this.userRepository.findByPk<User>(id);
    if (!user) {
      throw new HttpException(
        'User with given id not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return user;
  }

  async create(userData: CreateUserDto): Promise<User> {
    return this.userRepository.create(userData, { returning: true });
  }

  async update(id: string, userData: UpdateUserDto) {
    const [, updatedUser] = await this.userRepository.update(userData, {
      where: { id: id },
      returning: true,
    });
    return updatedUser[0];
  }
}
