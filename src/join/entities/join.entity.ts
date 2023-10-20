import { CommonEntity } from 'src/common/common.entity';
import { Post } from 'src/post/entities/post.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

@Entity('joins')
export class Join extends CommonEntity {
  @Column({ type: 'boolean', nullable: false, default: false })
  canceled: boolean;

  @Column({
    type: 'enum',
    enum: ['pending', 'accepted', 'rejected'],
    nullable: false,
    default: 'pending',
  })
  status: string;

  @Column({ type: 'int', nullable: false, default: 0 })
  matchingCount: number;

  @ManyToOne(() => User, user => user.joins)
  user: User;

  @ManyToOne(() => Post, post => post.joins)
  post: Post;
}
