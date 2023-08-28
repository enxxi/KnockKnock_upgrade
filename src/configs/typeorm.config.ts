import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// import 'dotenv/config'

export const typeORMConfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "4801",
    database: "postgres",
    entities: ["dist/**/*.entity{.ts,.js}"],
    synchronize: true
  }


