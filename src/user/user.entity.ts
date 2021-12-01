import {
  Table,
  Column,
  Model,
  DataType,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { v4 as uuidv4 } from 'uuid';

const tableOptions = {
  timestamps: true,
  tableName: 'users',
};

@Table(tableOptions)
export class User extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    unique: true,
    primaryKey: true,
    defaultValue: () => uuidv4(),
  })
  public id: string;

  @Column({
    type: DataType.CHAR(30),
    allowNull: false,
  })
  public name: string;

  @Column({
    type: DataType.CHAR(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
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
