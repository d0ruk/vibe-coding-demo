import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  BaseEntity,
} from "typeorm";
import type { Relation } from "typeorm";
import { User } from "./User";

export interface IUserRole {
  id: number;
  userId: number;
  value: ROLES[number];
  user: Relation<User>;
}

type ROLES = "admin" | "user" | "fellow" | "guest";

@Entity()
export class UserRole extends BaseEntity implements IUserRole {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  value: string; // Should be one of ROLES, but TypeORM does not support enum validation directly

  @OneToOne(() => User)
  @JoinColumn({ name: "userId" })
  user: Relation<User>;
}
