const { config } = require('../config');
const mongoose = require('mongoose');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const DB_HOST = config.dbHost

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
  `mongodb+srv://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,{ useFindAndModify: false },
  () => {
    if (!mongoose.connect) {
      console.log('Problem with connection to DB');
    }
    console.log('Database connected');
  }
);
