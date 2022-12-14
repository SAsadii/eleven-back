module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/products/:slug',
      handler: 'api::product.product.findOne',
      config: {
        auth: false,
      }
    }
  ]
}
