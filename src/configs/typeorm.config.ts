import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeORMConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "knock-upgrade.chcibpobmzks.ap-northeast-2.rds.amazonaws.com",
    port: 5432,
    username: "postgres",
    password: "alFftwUJXNqGKB8zZ6uw",
    database: "knock-upgrade",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }