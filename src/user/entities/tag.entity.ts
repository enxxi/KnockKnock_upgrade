import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TagCategory } from './tagCategory.entity';
import { TagUser } from './tagUser.entity';

@Entity('tags')
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @OneToMany(() => TagUser, tagUser => tagUser.tag)
  tagUsers: TagUser[];

  @ManyToOne(() => TagCategory, tagCategory => tagCategory.tags)
  tagCategory: TagCategory;
}
