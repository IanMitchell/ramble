import postmark from "postmark";

export default async function sendEmail({ to, subject, body }) {
  // const client = new postmark.Client(process.env.POSTMARK_TOKEN);
  // client.sendEmail({
  //   From: process.env.EMAIL,
  //   To: to,
  //   Subject: subject,
  //   TextBody: body,
  // });
  console.log({ to, subject, body });
}
