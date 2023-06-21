
class NewsController{

    // [GET] /news, function (req, res)
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug, function (req, res)
    show(req, res ) {
        res.send('NEWS DETAIL!!!');
    }
}

module.exports = new NewsController;