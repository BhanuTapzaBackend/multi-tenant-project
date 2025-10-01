import { ApiProperty } from '@nestjs/swagger';

export default class UserDto {
  @ApiProperty({ example: 'John Doe', description: 'The full name of the user' })
  name: string;

  @ApiProperty({ example: 'john.doe@example.com', description: 'The user\'s email address' })
  email: string;

  @ApiProperty({ example: 'Str0ngP@ssw0rd!', description: 'The user\'s password' })
  password: string;
}