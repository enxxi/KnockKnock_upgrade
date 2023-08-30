import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardModule } from './card/card.module';
import { ChatModule } from './chat/chat.module';
import { CommentModule } from './comment/comment.module';
import { typeORMConfig } from './configs/typeorm.config';
import { FileModule } from './file/file.module';
import { JoinModule } from './join/join.module';
import { MessageModule } from './message/message.module';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig), 
       UserModule,
    CardModule,
    ChatModule,
    CommentModule,
    FileModule,
    MessageModule,
    JoinModule,
    PostModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
