import { ApiProperty } from "@nestjs/swagger";
import UserDto from "src/users/user.dto";

export default class CreateCompanyDto {
  @ApiProperty({ example: 'MYSOUL Pharmacy', description: 'The name of the new company' })
  companyName: string;
  
  @ApiProperty()
  user: UserDto
}
