import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentModule } from './comment/comment.module';
import { typeORMConfig } from './configs/typeorm.config';
import { JoinModule } from './join/join.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeORMConfig), UserModule, CommentModule, JoinModule, PostModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
