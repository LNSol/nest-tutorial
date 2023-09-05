import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}

export class VerifyEmailDto {
  @IsString()
  readonly signupVerifyToken: string;
}

export class LoginUserDto {
  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
}

export class UserInfo {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;
}
