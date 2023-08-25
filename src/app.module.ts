import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { typeORMConfig } from './configs/typeorm.config';
import { UserModule } from './user/user.module';
import { CardModule } from './card/card.module';
import { ChatModule } from './chat/chat.module';
import { CommentModule } from './comment/comment.module';
import { FileModule } from './file/file.module';
import { MessageModule } from './message/message.module';
import { JoinModule } from './join/join.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    // TypeORMModule.forRoot(typeORMConfig),
    UserModule,
    CardModule,
    ChatModule,
    CommentModule,
    FileModule,
    MessageModule,
    JoinModule,
    PostModule],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
