import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { Book } from "./Book";

export interface IAuthor {
  id: number;
  first_name: string;
  last_name: string;
  books: Relation<Book>[];
}

@Entity()
export class Author extends BaseEntity implements IAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Relation<Book[]>;
}
