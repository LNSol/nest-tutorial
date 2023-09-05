import { Injectable } from '@nestjs/common';
import { v1 } from 'uuid';
import { CreateUserDto, LoginUserDto, UserInfo, VerifyEmailDto } from './dto';
import { EmailService } from 'src/email/email.service';

@Injectable()
export class UsersService {
  constructor(private readonly emailService: EmailService) {}

  async createUser(dto: CreateUserDto) {
    const { email } = dto;

    await this.checkUserExists(email);

    const signupVerifyToken = v1();

    await this.saveUser({ ...dto, signupVerifyToken });
    await this.sendMemberJoinEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    console.log('email > ', email);
    return false; // TODO: DB 연동 후 구현
  }

  private saveUser(newUser: CreateUserDto & VerifyEmailDto) {
    return; // TODO: DB 연동 후 구현
  }

  private async sendMemberJoinEmail(email: string, signupVerifyToken: string) {
    await this.emailService.sendMemberJoinVerification(
      email,
      signupVerifyToken,
    );
  }

  async verifyEmail(dto: VerifyEmailDto): Promise<string> {
    console.log('VerifyEmailDto > ', dto);
    // TODO
    // 1. DB에서 signupVerifyToken으로 회원 가입 처리중인 유저가 있는지 조회하고 없다면 에러 처리
    // 2. 바로 로그인 상태가 되도록 JWT를 발급

    throw new Error('Method not implemented.');
  }

  async login(dto: LoginUserDto): Promise<string> {
    console.log('LoginUserDto > ', dto);
    // TODO
    // 1. email, password를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
    // 2. JWT 발급

    throw new Error('Method not implemented.');
  }

  async getUserInfo(id: number): Promise<UserInfo> {
    console.log('user id > ', id);
    // TODO
    // 1. id를 가진 유저가 존재하는지 DB에서 확인하고 없다면 에러 처리
    // 2. 조호된 데이터를 UserInfo 타입으로 응답.

    throw new Error('Method not implemented.');
  }
}
