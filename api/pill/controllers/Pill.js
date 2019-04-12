'use strict';

/**
 * Pill.js controller
 *
 * @description: A set of functions called "actions" for managing `Pill`.
 */

module.exports = {

  /**
   * Retrieve pill records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pill.search(ctx.query);
    } else {
      return strapi.services.pill.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pill record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pill.fetch(ctx.params);
  },

  /**
   * Count pill records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pill.count(ctx.query);
  },

  /**
   * Create a/an pill record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pill.add(ctx.request.body);
  },

  /**
   * Update a/an pill record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pill.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pill record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pill.remove(ctx.params);
  }
};
