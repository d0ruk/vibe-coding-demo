import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from "typeorm";
import { Book } from "./Book";

export interface IAuthor {
  id: number;
  first_name: string;
  second_name: string;
  company_name: string;
  books: Book[];
}

@Entity()
export class Author extends BaseEntity implements IAuthor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  company_name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
