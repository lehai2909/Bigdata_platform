var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://lehai:Iambawmim260996!@sandbox.cohcx.mongodb.net/bigdata-platform-database?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error'));


db.once("open", function(){
    console.log("Connect Successfully!")
    console.log("Adding documents to database...")
    var PetInstance = require('./models/petinstance')

    const pet0 = new PetInstance({
        name: "Test Pet",
        location: "Test Addr, Thanh Khe, Da Nang",
        coordinateX: 16.0692398,
        coordinateY: 108.1825893,
        status: "Sick",
        adoptedDay: '2021-05-24'
    });

    pet0.save(function(){db.close();});
    });










    var mongoose = require('mongoose');
    var async = require('async')
    var mongoDB = 'mongodb+srv://lehai:Iambawmim260996!@sandbox.cohcx.mongodb.net/bigdata-platform-database?retryWrites=true&w=majority';
    mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'MongoDB connection error'));
    var PetInstance = require('./models/petinstance')
    
        async.series([
            function(callback){
                console.log("Connect Successfully!")
                console.log("Adding documents to database...")
                const pet0 = new PetInstance({
                    name: "Xuxu",
                    location: "Me Nhu, Thanh Khe, Da Nang",
                    coordinateX: 16.0692398,
                    coordinateY: 108.1825893,
                    status: "Sick",
                    adoptedDay: '2021-05-24'
                        });
                pet0.save(function(err){if (err) console.log(err);});
                callback(null);
                       },
        
            function(callback){
                console.log("Add many....")
                PetInstance.insertMany([
                    {
                        name: "Tieu Lang",
                        location: "Tran Cao Van, Thanh Khe, Da Nang",
                        coordinateX: 16.0762362,
                        coordinateY: 108.214028,
                        status: "Sick",
                        adoptedDay: '2021-05-24'
                    },
                    {
                        name: "Tieu Cau",
                        location: "Dien Bien Phu, Thanh Khe, Da Nang",
                        coordinateX: 16.0682771,
                        coordinateY: 108.2080973,
                        status: "Pregnant",
                        adoptedDay: '2021-05-25'
                    },
                    {
                        name: "Bon Bon",
                        location: "Dien Bien Phu, Thanh Khe, Da Nang",
                        coordinateX: 16.0682771,
                        coordinateY: 108.2080973,
                        status: "Sick",
                        adoptedDay: '2021-05-24'
                    },
                    {
                        name: "Tieu Bu",
                        location: "Nguyen Luong Bang, Hai Chau, Da Nang",
                        coordinateX: 16.1207623,
                        coordinateY: 108.1517612,
                        status: "Mistreated",
                        adoptedDay: '2021-05-25'
                    }]);
                    callback(null);}],function(err){if (err) console.log("Error: " + err); else db.close();});
    
    