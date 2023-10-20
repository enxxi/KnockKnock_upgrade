import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Tag } from './tag.entity';
import { TagUser } from './tagUser.entity';

@Entity('tagCategories')
export class TagCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Tag, tag => tag.tagCategory)
  tags: Tag[];

  @OneToMany(() => TagUser, tagUser => tagUser.tagCategory)
  tagUsers: TagUser[];
}
