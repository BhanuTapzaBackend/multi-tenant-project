import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import CredentialsDto from './dtos/credentials.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({ summary: 'Login a user to get an access token' })
  @ApiResponse({ status: 201, description: 'Login successful. Returns access token and tenant ID.'})
  @ApiResponse({ status: 401, description: 'Unauthorized. Wrong credentials.' })
  async login(@Body() credentials: CredentialsDto) {
    return this.authService.login(credentials);
  }
}
