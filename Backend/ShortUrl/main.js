const express = require('express');
const app = express();
const mongoose = require('mongoose');
const ShortUrl = require('./models/server');

mongoose.connect('mongodb://127.0.0.1:27017/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then((result) => {
    console.log("connnecton established",result);
}).catch((err) => {
    console.log("Error:",err);
});


app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async(req,res)=>{
    const data = await ShortUrl.find();
    res.render('index',{ urlData: data})
})
app.post('/urlLink', async (req,res) =>{
    await ShortUrl.create({
        full: req.body.fullUrl
    })

    res.redirect('/');
})

app.get('/:urlLink', async (req,res)=>{
    const url = await ShortUrl.findOne({ short: req.params.urlLink})
    if ( url!= null) {
        url.click++;
        url.save();
    }
    res.redirect(url.full);
} )

app.listen(process.env.PORT || 5000);