import { User } from './user.entity';

export const usersProvider = {
  provide: 'USER_REPOSITORY',
  useValue: User,
};
