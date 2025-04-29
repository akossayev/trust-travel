import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { UserAccountType } from '../constants/user-account-type';
import { UserRoleType } from '../constants/user-role-type';
import {CompanyEntity} from "./company.entity";

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: number;

  @Column({
    name: 'email',
    type: 'text',
  })
  email: string;

  @Column({
    name: 'username',
    type: 'text',
  })
  username: string;

  @Column({
    name: 'full_name',
    type: 'text',
  })
  fullName: string;

  @Column({
    name: 'password',
    type: 'text',
  })
  password: string;

  @Column({
    name: 'role',
    type: 'enum',
    enum: UserRoleType,
    default: UserRoleType.USER,
  })
  role: UserRoleType;

  @Column({
    name: 'account_type',
    type: 'enum',
    enum: UserAccountType,
  })
  accountType: UserAccountType;

  @Column({
    name: 'phone',
    type: 'text',
  })
  phone: string;

  @Column({
    name: 'city',
    type: 'text',
  })
  city: string;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamptz',
    default: 'now()',
  })
  createdAt: string;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamptz',
    default: 'now()',
  })
  updatedAt: string;

  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamptz',
    nullable: true,
  })
  deletedAt: string | null;

  @OneToOne(() => CompanyEntity, (company) => company.owner)
  owningCompany?: CompanyEntity;

}
