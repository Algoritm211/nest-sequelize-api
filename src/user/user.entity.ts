import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';

const tableOptions = {
  timestamp: true,
  tableName: 'users',
};

@Table(tableOptions)
export class User extends Model<User> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    unique: true,
    primaryKey: true,
  })
  public id: number;

  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  public name: string;

  @Column({
    type: DataType.CHAR(100),
    allowNull: false,
    validate: {
      isEmail: true,
      isUnique: async (value: string, next) => {
        const isExist = await User.findOne({ where: { email: value } });
        if (isExist) {
          const error = new Error('Email is already in DB');
          next(error);
        }
        next();
      },
    },
  })
  public email: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  public password: string;

  @Column({ type: DataType.DATE })
  public birthday: Date;

  @CreatedAt public createdAt: Date;

  @UpdatedAt public updatedAt: Date;

  @DeletedAt public deletedAt: Date;
}
