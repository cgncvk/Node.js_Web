var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

var mongoDB = 'mongodb://localhost/yenidb';


mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true },function(err,data) {
    if (err) {
        console.log('mongoose hatasi:' + err) ;
    } else {
        console.log('mongoose baglandi:' + mongoDB);
    }


});