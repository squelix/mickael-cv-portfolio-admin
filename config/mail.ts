export default ({ env }) => ({
  sender: env('SENDGRID_SENDER'),
  accessToken: env('MAIL_ACCESS_TOKEN'),
  reCaptchaSecretKey: env('RE_CAPTCHA_PRIVATE_KEY'),
});
