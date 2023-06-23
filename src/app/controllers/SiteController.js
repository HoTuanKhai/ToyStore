const Gundam = require('../models/Gundam')
const { mutipleMongooseToObject } = require('../../util/mongoose')

class SiteController{

    // [GET] /
    index(req, res, next) {
        Gundam.find({})
            .then(gundams => {
                res.render('home', {
                     gundams: mutipleMongooseToObject(gundams)
                    })
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