var petInstances = require('../models/pet_instance_model');

exports.index = function(req, res, next){
    petInstances.find({}, 'name location status')
    .exec(function(err, pet_instances){

        //If error return, so give to next middleware
        if (err){ return next(err);}

        //If successful, render 'index' pug template
        res.render('index', {title: 'The animals we are adopting', pet_instances: pet_instances});

    })
    
};