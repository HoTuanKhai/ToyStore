
class SiteController{

    // [GET] /
    index(req, res) {
        res.render('home');
    }

    // [GET] /search, function (req, res)
    search(req, res ) {
        res.render('search');
    }
}

module.exports = new SiteController;