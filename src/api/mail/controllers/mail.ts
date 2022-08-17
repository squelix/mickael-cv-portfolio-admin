import axios from 'axios';
import url from 'url';

export default {
  async send(ctx) {
    try {
      const { token, subject, text, html, email } = ctx.request.body;
      const accessToken = ctx.request.headers['x-access-token'];
      const myAccessToken = strapi.config.get('mail.accessToken');

      if (!token || !subject || !text || !html || !email) {
        ctx.status = 400;
        ctx.body = 'Bad Request';
      } else if (!accessToken || accessToken !== myAccessToken) {
        ctx.status = 401;
        ctx.body = 'Unauthorized';
      } else {
        const params = new url.URLSearchParams({
          secret: strapi.config.get('mail.reCaptchaSecretKey'),
          response: token,
        });
        const { success } = await axios
          .post('https://www.google.com/recaptcha/api/siteverify', params.toString())
          .then((response) => response.data);

        if (!success) {
          ctx.status = 422;
          ctx.body = 'Captcha not good';
        } else {
          await strapi.plugins['email'].services.email.send({
            to: strapi.config.get('mail.sender'),
            from: strapi.config.get('mail.sender'),
            replyTo: email,
            subject,
            text,
            html,
          });
          ctx.status = 204;
        }
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
