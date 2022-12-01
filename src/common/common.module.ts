import { Module } from '@nestjs/common';
// * Modules
import { ConfigModule } from './config.module';
import { GraphqlModule } from './graphql.module';
import { MysqlModule } from './mysql.module';

@Module({
  imports: [ConfigModule, GraphqlModule, MysqlModule],
  exports: [ConfigModule, GraphqlModule, MysqlModule],
})
export class CommonModule {}
