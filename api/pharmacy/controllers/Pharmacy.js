'use strict';

/**
 * Pharmacy.js controller
 *
 * @description: A set of functions called "actions" for managing `Pharmacy`.
 */

module.exports = {

  /**
   * Retrieve pharmacy records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.pharmacy.search(ctx.query);
    } else {
      return strapi.services.pharmacy.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a pharmacy record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.pharmacy.fetch(ctx.params);
  },

  /**
   * Count pharmacy records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.pharmacy.count(ctx.query);
  },

  /**
   * Create a/an pharmacy record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.pharmacy.add(ctx.request.body);
  },

  /**
   * Update a/an pharmacy record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.pharmacy.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an pharmacy record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.pharmacy.remove(ctx.params);
  }
};
