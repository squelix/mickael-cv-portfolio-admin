/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * `custom-header` middleware
 */

import { Strapi } from '@strapi/strapi';
import { Context } from 'koa';

export default (_config, { strapi: _strapi }: { strapi: Strapi }) => {
  // Add your own logic here.
  return async (ctx: Context, next) => {
    const method = ctx.request.method.toLowerCase();
    if (method === 'get' || method === 'head') {
      ctx.response.set('Cache-Control', 'max-age=21600');
    }

    await next();
  };
};
