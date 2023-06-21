const Gundam = require('../models/Gundam')

class SiteController{

    // [GET] /
    index(req, res, next) {
        Gundam.find({})
            .then(gundams => {
                gundams = gundams.map(gundams => gundams.toObject())
                res.render('home', { gundams })
            })
            .catch(next)
        
        // res.render('home');
    }

    // [GET] /search, function (req, res)
    search(req, res ) {
        res.render('search');
    }
}

module.exports = new SiteController;