import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { createTransport } from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import emailConfig from 'src/config/emailConfig';

interface MailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;
  constructor(
    @Inject(emailConfig.KEY)
    private readonly config: ConfigType<typeof emailConfig>,
  ) {
    this.transporter = createTransport({
      service: config.service,
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    });
  }

  async sendMemberJoinVerification(email: string, signupVerifyToken: string) {
    const baseUrl = this.config.baseUrl;
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
