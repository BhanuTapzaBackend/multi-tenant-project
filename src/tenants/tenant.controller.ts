import { Body, Controller, Post } from '@nestjs/common';
import CreateCompanyDto from './create-company.dto';
import { TenantsService } from './tenants.service';

@Controller('tenent')
export class TenantController {
    constructor(private readonly tenantsService: TenantsService) {}

  @Post('create-company')
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.tenantsService.createCompany(createCompanyDto);
  }
}
