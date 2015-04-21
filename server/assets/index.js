'use strict';

// Routing and file serving for public assets
exports.register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/images/{glob*}',
      config: {
        handler: {
          directory: { path: './public/images' }
        },
        id: 'images'
      }
    }
  ]);

  next();
};

exports.register.attributes = {
  name: 'assets'
};
