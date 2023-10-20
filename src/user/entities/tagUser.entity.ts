import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';
import { TagCategory } from './tagCategory.entity';
import { User } from './user.entity';

@Entity()
export class TagUser {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.tagUsers)
  user: User;

  @ManyToOne(() => Tag, tag => tag.tagUsers)
  tag: Tag;

  @ManyToOne(() => TagCategory, tagCategory => tagCategory.tagUsers)
  tagCategory: TagCategory;
}
