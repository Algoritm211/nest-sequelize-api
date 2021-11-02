import { IUser } from '../interfaces/user.interface';

export class CreateUserDto implements IUser {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly birthday?: Date;
}
