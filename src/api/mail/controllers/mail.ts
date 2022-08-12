export default {
  async send(ctx) {
    try {
      const accessToken = ctx.request.headers['x-access-token'];
      const myAccessToken = strapi.config.get('mail.accessToken');

      if (!!accessToken && accessToken === myAccessToken) {
        const { subject, text, html } = ctx.request.body;

        await strapi.plugins['email'].services.email.send({
          to: strapi.config.get('mail.sender'),
          from: strapi.config.get('mail.sender'),
          replyTo: strapi.config.get('mail.sender'),
          subject,
          text,
          html,
        });
        ctx.status = 204;
      } else {
        ctx.status = 401;
        ctx.body = 'Unauthorized';
      }
    } catch (err) {
      ctx.body = err;
    }
  },
};
