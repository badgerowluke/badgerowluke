const Metalsmith = require('metalsmith');
// const inplace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
    .source('./src')
    .destination('./build')
    .clean(true)
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: './templates'
    }))
    .build(function (err) {
        // For error handling
        if (err) {
            throw err;
        }
    });