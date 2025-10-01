import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { TenantConnectionService } from 'src/services/tenant-connection.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService, TenantConnectionService],
  exports: [AuthService]
})
export class AuthModule {}
