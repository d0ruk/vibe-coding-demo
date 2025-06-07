import { Entity, PrimaryColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Author } from "./Author";
import { Publisher } from "./Publisher";

export interface IBook {
  isbn: string;
  title: string;
  publication_date: Date;
  edition: number;
  available_quantity: number;
  price: number;
  author: Author;
  publisher: Publisher;
}

@Entity()
export class Book extends BaseEntity implements IBook {
  @PrimaryColumn()
  isbn: string;

  @Column()
  title: string;

  @Column()
  publication_date: Date;

  @Column()
  edition: number;

  @Column()
  available_quantity: number;

  @Column("decimal", { precision: 6, scale: 2 })
  price: number;

  @ManyToOne(() => Author, (author: Author) => author.books)
  author: Author;

  @ManyToOne(() => Publisher, (publisher: Publisher) => publisher.books)
  publisher: Publisher;
}
