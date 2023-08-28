import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  nickname: string;

  @Column()
  password: string;

  @Column()
  gender: string;

  @Column()
  birthday: string;

  @Column()
  age: string;

  @Column()
  job: string;

  @Column()
  region: string;

  @Column()
  mbti: string;

  @Column()
  height: string;

  @Column()
  introduce: string;

  @Column()
  is_deleted: string;
}