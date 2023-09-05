import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto, LoginUserDto, UserInfo, VerifyEmailDto } from './dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async signUp(@Body() dto: CreateUserDto): Promise<void> {
    await this.usersService.createUser(dto);
  }

  @Post('/email-verify')
  async emailVerify(@Query() dto: VerifyEmailDto): Promise<string> {
    return await this.usersService.verifyEmail(dto);
  }

  @Post('/login')
  async login(@Body() dto: LoginUserDto): Promise<string> {
    return await this.usersService.login(dto);
  }

  @Get('/:id')
  async getUserInfo(@Param('id') id: number): Promise<UserInfo> {
    return await this.usersService.getUserInfo(id);
  }
}
