import { Comment } from 'src/comment/entities/comment.entity';
import { CommonEntity } from 'src/common/common.entity';
import { Join } from 'src/join/entities/join.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity('posts')
export class Post extends CommonEntity {
  @Column({ type: 'varchar', length: 5, nullable: false })
  type: string;

  @Column({ type: 'varchar', length: 100, nullable: false })
  title: string;

  @Column({ type: 'varchar', length: 30, nullable: false })
  place: string;

  @Column({ type: 'timestamp', nullable: false })
  meetingTime: Date;

  @Column({ type: 'varchar', length: 200, nullable: true })
  content: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  isCompleted: boolean;

  @Column({ type: 'int', nullable: false })
  totalM: number;

  @Column({ type: 'int', nullable: false })
  totalF: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  recruitedM: number;

  @Column({ type: 'int', nullable: false, default: 0 })
  recruitedF: number;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];

  @ManyToOne(() => User, user => user.posts)
  user: User;

  @OneToMany(() => Join, join => join.post)
  joins: Join[];

  //   @OneToMany(() => PostFile, (postFile) => postFile.post)
  //   postFiles: PostFile[];
}
