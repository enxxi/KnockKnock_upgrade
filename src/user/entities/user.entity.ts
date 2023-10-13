import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity } from 'typeorm';
import { Mbti, Region } from '../types/user.enum';

@Entity('users')
export class User extends CommonEntity {
  @Column({ type: 'varchar', nullable: false })
  email: string;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  nickname: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'varchar', nullable: false })
  gender: string;

  @Column({ type: 'date', nullable: false })
  birthday: string;

  @Column({ type: 'varchar', nullable: false })
  job: string;

  @Column({
    type: 'enum',
    enum: Region,
    nullable: false, // 이 열이 null이 아니어야 하는 경우
    default: Region.SEOUL, // 선택적으로 기본값 설정
  })
  region: Region;

  @Column({ type: 'enum', enum: Mbti, nullable: false })
  mbti: Mbti;

  @Column({ type: 'varchar', nullable: false })
  height: string;

  @Column({ type: 'varchar', length: 255 })
  introduce: string;

  @Column({ type: 'boolean', default: false, nullable: false })
  isDelete: boolean;
}
