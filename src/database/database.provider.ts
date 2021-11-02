import { Sequelize } from 'sequelize-typescript';
import { User } from '../user/user.entity';
import { config } from 'dotenv';
config();

export const databaseProvider = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: 'users',
    });
    sequelize.addModels([User]);
    await sequelize.sync();
    return sequelize;
  },
};
