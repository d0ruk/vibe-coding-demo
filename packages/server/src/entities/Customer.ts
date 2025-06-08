import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { User } from "./User";

export interface ICustomer {
  id: number;
  postal_code: string;
  street: string;
  building_no: string;
  flat_no: string;
  city: string;
  user: Relation<User>;
}

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  postal_code: string;

  @Column()
  street: string;

  @Column()
  building_no: string;

  @Column()
  flat_no: string;

  @Column()
  city: string;

  @ManyToOne(() => User, (user) => user.customers)
  user: Relation<User>;
}
