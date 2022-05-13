'use strict';

/**
 * social-network service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::social-network.social-network');
