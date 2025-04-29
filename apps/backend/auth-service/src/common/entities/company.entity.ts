import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('companies')
export class CompanyEntity {
  @PrimaryGeneratedColumn({
    name: 'id',
    type: 'bigint',
  })
  id: string;

  @Column({
    name: 'owner_id',
    type: 'bigint',
  })
  ownerId: number;

  @Column({
    name: 'bin',
    type: 'bigint',
  })
  bin: number;

  @Column({
    name: 'kbe',
    type: 'bigint',
  })
  kbe: number;

  @Column({
    name: 'registered_address',
    type: 'text',
  })
  registeredAddress: string;

  @Column({
    name: 'email_address',
    type: 'text',
  })
  emailAddress: string;

  @Column({
    name: 'postcode',
    type: 'number',
  })
  postcode: number;

  @Column({
    name: 'iik',
    type: 'number',
  })
  iik: number;

  @Column({
    name: 'bik',
    type: 'number',
  })
  bik: number;

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

  @OneToOne(() => UserEntity, (user) => user.owningCompany, {
    cascade: true,
  })
  @JoinColumn({ name: 'owner_id' })
  owner?: UserEntity;
}
