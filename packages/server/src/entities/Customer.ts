import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

export interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  login: string;
  passwordhash: string;
  postal_code: string;
  street: string;
  building_no: string;
  flat_no: string;
  city: string;
  nip: string;
  phone_number: string;
}

@Entity()
export class Customer extends BaseEntity implements ICustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  login: string;

  @Column()
  passwordhash: string;

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

  @Column()
  nip: string;

  @Column()
  phone_number: string;
}
