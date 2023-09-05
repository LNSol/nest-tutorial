import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;
  constructor() {
    this.transporter = createTransport({
      service: 'Gmail',
      auth: {
        user: 'dmsgk1559@gmail.com',
        pass: 'ankuxxllpdtwsiwv',
      },
    });
  }

  async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
    const baseUrl = 'http://localhost:3000';
    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOption: MailOptions = {
      to: email,
      subject: '가입 인증 메일',
      html: `
      가입확인 버튼을 누르면 인증이 완료됩니다.<br />
      <form action="${url}" method="POST">
        <button>가입확인</button>
      </form>
      `,
    };

    return await this.transporter.sendMail(mailOption);
  }
}
