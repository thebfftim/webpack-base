const contentful = require('contentful');
const config = require('../package.json').config || {};

const client = contentful.createClient({
    accessToken: config.accessToken,
    space: config.space,
});

exports.client = client;
