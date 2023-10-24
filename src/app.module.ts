import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CommentModule } from './comment/comment.module';
import { DatabaseModule } from './configs/typeorm.config';
import { JoinModule } from './join/join.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UserModule,
    CommentModule,
    JoinModule,
    PostModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
