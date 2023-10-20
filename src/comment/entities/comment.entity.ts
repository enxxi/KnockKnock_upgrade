import { CommonEntity } from 'src/common/common.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Post } from '../../post/entities/post.entity';

@Entity('comments')
export class Comment extends CommonEntity {
  @Column({ type: 'varchar', nullable: false })
  content: string;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @ManyToOne(() => User, user => user.comments)
  user: User;
}
