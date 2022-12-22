import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Estado extends BaseEntity {
  /* genera el id de la tabla */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserId: string;

  @Column()
  estado: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAd: Date;
}
