import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Comment } from '../../comment/entities/comment.entity';
import { Join } from '../../join/entities/join.entity';
import { Post } from '../../post/entities/post.entity';
import { Mbti, Region } from '../types/user.enum';
import { TagUser } from './tagUser.entity';

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
  isDeleted: boolean;

  @OneToMany(() => Post, post => post.user)
  posts: Post[];

  @OneToMany(() => Join, join => join.user)
  joins: Join[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];

  @OneToMany(() => TagUser, tagUser => tagUser.user)
  tagUsers: TagUser[];
}
