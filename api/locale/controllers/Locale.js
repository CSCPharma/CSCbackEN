'use strict';

/**
 * Locale.js controller
 *
 * @description: A set of functions called "actions" for managing `Locale`.
 */

module.exports = {

  /**
   * Retrieve locale records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.locale.search(ctx.query);
    } else {
      return strapi.services.locale.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a locale record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.locale.fetch(ctx.params);
  },

  /**
   * Count locale records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.locale.count(ctx.query);
  },

  /**
   * Create a/an locale record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.locale.add(ctx.request.body);
  },

  /**
   * Update a/an locale record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.locale.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an locale record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.locale.remove(ctx.params);
  }
};
