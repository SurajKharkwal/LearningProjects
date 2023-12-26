const createUser = require('./Controller/createUser');
const checkUsers = require('./Controller/checkUser');
const createUrl = require('./Controller/createUrl');
const findUrls = require('./Controller/findUrl');
const cookieParser = require('cookie-parser');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

// checks on password client side

dotenv.config({ path: './.env' });
app.use(cookieParser());
app.use( cors( {origin:'http://localhost:5173' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//api
app.post('/Login', async (req, res)=>{
  const data = req.body;
  console.log(data);
  const result = await checkUsers(process.env.mongoUrl, data);
  if( result) {
    console.log(result)
    res.cookie("loggedInUser", 'username', {
      maxAge: 3600000, // Cookie expires in 1 hour
      httpOnly: true, // Cookie can't be accessed via JavaScript
    });
    console.log("Login successful");
  }
})

app.get('/get-data', async (req, res) => {
  const myCookie = req.cookies.id;
  console.log(myCookie)
  if (myCookie) {
    const result = await findUrls(process.env.mongoUrl, myCookie);
    console.log(result);
    res.json(result);
  } else {
    res.status(404);
  }
});

app.post('/Sigin', async (req,res)=>{
  const data = req.body;
  console.log(data)
  const uid = await createUser(process.env.mongoUrl, data);
  res.cookie('id', uid, {
    maxAge: 3600000,
    httpOnly: true
  } );
  console.log(data, uid);
})

app.post('/urllink', async(req, res)=>{
  const data = await req.body;
  console.log(data);
  createUrl(process.env.mongoUrl, data);
})

app.listen(process.env.port, ()=> {
  console.log('Server Started');
})



//coookie
//json ?