import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "083059d49f96ee",
    pass: "14a0f3d533c08f"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <eric.carlottoitapiruba@gmail.com',
      to: 'Eric Carlotto <ericitapiruba@hotmail.com.br',
      subject,
      html: body,
    })
  }
}