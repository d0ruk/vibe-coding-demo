import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  OneToOne,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { Customer } from "./Customer";
import { UserRole } from "./UserRole";

export interface IUser {
  id: number;
  username: string;
  email: string;
  passwordhash: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  customers: Relation<Customer>[];
  role: Relation<UserRole>;
}

@Entity()
export class User extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordhash: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  phone_number: string;

  @OneToMany(() => Customer, (customer) => customer.user)
  customers: Relation<Customer[]>;

  @OneToOne(() => UserRole, (role) => role.user)
  role: Relation<UserRole>;
}
