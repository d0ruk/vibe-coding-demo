import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import type { Relation } from "typeorm";
import { Author } from "./Author";
import { Publisher } from "./Publisher";

export interface IBook {
  isbn: string;
  title: string;
  publication_date: Date;
  edition: number;
  available_quantity: number;
  price: number;
  authorId: number;
  author: Relation<Author>;
  publisherId: number;
  publisher: Relation<Publisher>;
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

  @Column()
  authorId: number;

  @ManyToOne(() => Author, (author: Author) => author.books)
  @JoinColumn({ name: "authorId" })
  author: Relation<Author>;

  @Column()
  publisherId: number;

  @ManyToOne(() => Publisher, (publisher: Publisher) => publisher.books)
  @JoinColumn({ name: "publisherId" })
  publisher: Relation<Publisher>;
}
