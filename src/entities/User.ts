import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity()
export class Vasist extends BaseEntity {
  /* genera el id de la tabla */
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  userId: string;

  @Column()
  question: string;

  @Column()
  question1: string;

  @Column()
  question2: string;

  @Column()
  question3: string;

  @Column()
  question4: string;

  @Column()
  questionTxt: string;

  @Column()
  questionTxt1: string;

  @Column()
  questionTxt2: string;

  @Column()
  questionTxt3: string;

  @Column()
  questionTxt4: string;

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updateAd: Date;
}
