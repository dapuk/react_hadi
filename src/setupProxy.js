const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/tbl_matkul',
    createProxyMiddleware({
      target: 'https://my-json-server.typicode.com/dapuk/dbjsonhadi',
      changeOrigin: true,
    })
  );
};