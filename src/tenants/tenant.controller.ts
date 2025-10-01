import { Body, Controller, Post } from '@nestjs/common';
import CreateCompanyDto from './create-company.dto';
import { TenantsService } from './tenants.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tenant')
@Controller('tenant')
export class TenantController {
    constructor(private readonly tenantsService: TenantsService) {}

  @Post('create-company')
  @ApiOperation({ summary: 'Register a new company and its first user' })
  @ApiResponse({ status: 201, description: 'The company has been successfully created.'})
  @ApiResponse({ status: 400, description: 'Bad Request. User might already exist.' })
  async createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.tenantsService.createCompany(createCompanyDto);
  }
}
