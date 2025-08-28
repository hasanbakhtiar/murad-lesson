const swaggerJsDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Documentation',
    version: '1.0.0',
    description: 'API documentation prepared for the Express project',
  },
  servers: [
    {
      url: 'http://localhost:3000',
    },
  ],
  components: {
    securitySchemes: {
      customAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'login-auth-token',
        description: 'Statik və ya login token, Bearer olmadan',
      },
      apiKeyAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'static-access',
        description: 'Statik API açarı',
      },
    },
  },
  security: [
    {
      customAuth: [],
    },
    {
      apiKeyAuth: [],
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ['./swagger/docs**/*.js'],
};

const swaggerDocs = swaggerJsDoc(options);

module.exports = swaggerDocs;
