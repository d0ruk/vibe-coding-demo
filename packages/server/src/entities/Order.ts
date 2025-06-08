import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { Customer } from "./Customer";
import { Book } from "./Book";

export interface IOrder {
  id: number;
  customerId: number;
  books: Relation<Book>[];
  orderDate: Date;
  customer: Relation<Customer>;
}

@Entity()
export class Order extends BaseEntity implements IOrder {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customerId: number;

  @Column()
  orderDate: Date;

  @OneToOne(() => Customer)
  @JoinColumn({ name: "customerId" })
  customer: Relation<Customer>;

  @OneToMany(() => Book, (book) => book.isbn)
  books: Relation<Book>[];
}
