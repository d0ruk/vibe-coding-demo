import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { Book } from "./Book";

export interface IPublisher {
  id: number;
  name: string;
  books: Relation<Book[]>;
}

@Entity()
export class Publisher extends BaseEntity implements IPublisher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books: Relation<Book[]>;
}
