const exphbs  = require('express-handlebars');
const path = require('path');
const express = require('express');
const app = express()
const port = process.env.PORT || 3000
const route = require('./routes/index');
const db = require('./config/db/index');
const bodyParser = require('body-parser');
const passport = require('passport');
app.use(bodyParser.urlencoded({ extended : true}))
const JWT = require('jsonwebtoken');
const session = require('express-session');
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(passport.initialize());
app.use(passport.session());
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/resouce/views'));




// path
route(app);



passport.serializeUser((profile, done)=> {
  done(null, profile);
})
passport.deserializeUser((profile,done)=> {
  done(null, profile);
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  
})



db.connect();