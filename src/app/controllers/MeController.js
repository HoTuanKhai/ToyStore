const Gundam = require('../models/Gundam')
const { mongooseToObject, mutipleMongooseToObject } = require('../../util/mongoose')

class MeController{
    // [GET] /me/stored/gundams, function (req, res)
    storedGundams(req, res, next) {
        Gundam.find({})
            .then(gundams => res.render('me/stored-gundams', {
                gundams: mutipleMongooseToObject(gundams)
            }))
            .catch(next)
    }

}



module.exports = new MeController;