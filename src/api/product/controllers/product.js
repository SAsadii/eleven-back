'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({strapi}) => ({
    async findOne(ctx) {
      const { slug, id } = ctx.params
      const entity = await strapi.db.query('api::product.product').findOne({
        where: { slug: id },
        populate: true,
      })
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx)

      return this.transformResponse(sanitizedEntity)
    }
  }
));
