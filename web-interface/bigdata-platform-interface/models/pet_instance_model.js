var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PetInstanceSchema = new Schema(
    {
        name: {type: String, maxLength: 20},
        location: {type: String, required: true},
        coordinateX: Number,
        coordinateY: Number,
        status: {type: String, enum: ['Healthy', 'Sick', 'Pregnant','Mistreated'], required: true},
        adoptedDay: Date
    }
);

PetInstanceSchema
.virtual('url')
.get(function(){
    return '/Instances/' + this._id;
});

//Export model
module.exports = mongoose.model('PetInstance', PetInstanceSchema);
