import { Module } from '@nestjs/common';
// * Modules
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [CommonModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
