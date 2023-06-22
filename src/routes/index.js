const newsRouter = require('./news');
const meRouter = require('./me');
const gundamsRouter = require('./gundams');
const siteRouter = require('./site');


function route(app){

    app.use('/news', newsRouter)
    app.use('/me', meRouter)
    app.use('/gundams', gundamsRouter)

    app.use('/', siteRouter)
    

}

module.exports = route;