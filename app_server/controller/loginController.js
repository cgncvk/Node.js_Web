var Kullanici = require('../models/kullanici');


module.exports.indexGet = function(req, res) {
    res.render('login');
}
module.exports.indexPost = function(req, res) {

    console.log(req.body);

    res.render('login', {
        username: req.body.username,
        password: req.body.password
    });
}
module.exports.signupGet = function(req, res) {
    res.render('signup')
}

module.exports.signupPost = function(req, res) {



    var yeniKullanici = new Kullanici({
        ad: req.body.ad,
        soyad: req.body.soyad,
        email: req.body.email,
        kullaniciadi: req.body.kullaniciadi,
        sifre: req.body.sifre
    });

    yeniKullanici.save(function(err) {
        if (err) {

        } else {
            res.redirect('/login/kullanicilarlistesi')
        }
    });
   
    
    
}

module.exports.kullanicilarListesi = function(req, res) {
    Kullanici.find(function(err, results) {

        res.render('kullanicilarListesi', { kullanicilar: results });
    });       
}
module.exports.kullaniciSil = function(req, res) {

    Kullanici.findOneAndRemove({kullaniciadi:req.params.kullaniciadi}, function(err){
        if (err) {
            console.log('silmede hata var');
        }
        res.redirect('/login/kullanicilarListesi');            
    });
    console.log(req.params.kullaniciadi);
}
