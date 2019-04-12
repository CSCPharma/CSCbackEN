'use strict';

/**
 * Pilllink.js controller
 *
 * @description: A set of functions called "actions" for managing `Pilllink`.
 */

module.exports = {

  /**
   * Retrieve pilllink records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pilllink.search(ctx.query);
    } else {
      return strapi.services.pilllink.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pilllink record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pilllink.fetch(ctx.params);
  },

  /**
   * Count pilllink records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pilllink.count(ctx.query);
  },

  /**
   * Create a/an pilllink record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pilllink.add(ctx.request.body);
  },

  /**
   * Update a/an pilllink record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pilllink.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pilllink record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pilllink.remove(ctx.params);
  }
};
