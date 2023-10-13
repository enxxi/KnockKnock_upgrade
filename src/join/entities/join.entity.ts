import { CommonEntity } from 'src/common/common.entity';
import { Column, Entity } from 'typeorm';

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
  status: 'pending' | 'accepted' | 'rejected';

  @Column({ type: 'int', nullable: false, default: 0 })
  matchingCount: number;

  @Column({ type: 'boolean' })
  statust: boolean;

  // @ManyToOne(() => User, (user) => user.participants)
  // user: User;

  // @ManyToOne(() => Post, (post) => post.participants)
  // post: Post;
}
