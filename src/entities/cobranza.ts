import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Cobrar extends BaseEntity {
  /* genera el id de la tabla */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserId: string;

  @Column()
  select: string;

  @Column()
  select1: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAd: Date;
}
