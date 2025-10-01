import { Module } from '@nestjs/common';
import { TenantController } from './tenant.controller';
import { TenantsService } from './tenants.service';

@Module({
  controllers: [TenantController],
  providers: [TenantsService]
})
export class TenentModule {}
