import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Desviar extends BaseEntity {
  /* genera el id de la tabla */
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  UserId: string;

  @Column()
  desviado: string;

  @Column()
  inputdesviar: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAd: Date;
}
