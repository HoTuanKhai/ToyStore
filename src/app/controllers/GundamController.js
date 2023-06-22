const Gundam = require('../models/Gundam')
const { mongooseToObject } = require('../../util/mongoose')

class GundamController{
    // [GET] /gundams/:slug, function (req, res)
    show(req, res, next) {
        Gundam.findOne({ slug: req.params.slug })
            .then(gundam => {
                res.render('gundams/show', { gundam: mongooseToObject(gundam) })
            })
            .catch(next)
    }

    // [GET] /gundams/create, function (req, res)
    create(req, res, next) {
        res.render('gundams/create')
    }

    // [POST] /gundams/store, function (req, res)
    store(req, res, next) {

        const gundam = new Gundam(req.body)
        gundam.save()
            .then(() => res.redirect('/'))
            .catch(next)
            
    }

    // [GET] /gundams/:id/edit, function (req, res)
    edit(req, res, next) {
        Gundam.findById(req.params.id)
            .then(gundam => res.render('gundams/edit', {
                gundam: mongooseToObject(gundam)
            }))  
            .catch(next)
    }

    // [PUT] /gundams/:id, function (req, res)
    update(req, res, next) {
        Gundam.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/gundams'))
            .catch(next)
    }

    // [DELETE] /gundams/:id, function (req, res)
    destroy(req, res, next) {
        Gundam.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next)
    }
}



module.exports = new GundamController;