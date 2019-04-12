'use strict';

/**
 * Vacancy.js controller
 *
 * @description: A set of functions called "actions" for managing `Vacancy`.
 */

module.exports = {

  /**
   * Retrieve vacancy records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.vacancy.search(ctx.query);
    } else {
      return strapi.services.vacancy.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a vacancy record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.vacancy.fetch(ctx.params);
  },

  /**
   * Count vacancy records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.vacancy.count(ctx.query);
  },

  /**
   * Create a/an vacancy record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.vacancy.add(ctx.request.body);
  },

  /**
   * Update a/an vacancy record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.vacancy.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an vacancy record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.vacancy.remove(ctx.params);
  }
};
