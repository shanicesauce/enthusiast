const path = require('path');
<<<<<<< HEAD
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers');

const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage: storage})

=======
const express = require('express');
>>>>>>> 5b96718bffe32f21ae95b415f2c787edb9255643
const exphbs = require('express-handlebars');
const session = require('express-session');
const helpers = require('./utils/helpers');
const routes = require('./controllers/');


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');

const hbs = exphbs.create({ helpers });

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

//hbs engine primes helpers to be used
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// hbs.registerPartials(path.join(__dirname, '/views/partials'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

//turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
