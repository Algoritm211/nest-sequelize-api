import { IUser } from '../interfaces/user.interface';

export class UpdateUserDto implements IUser {
  readonly name: string;
  readonly email: string;
  readonly password: string;
  readonly birthday?: Date;
}
