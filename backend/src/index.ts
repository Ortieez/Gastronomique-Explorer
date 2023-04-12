import express = require('express');
import mongoose from 'mongoose';
import morgan = require('morgan');
import PlaceRoute from './routes/PlaceRoute';
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/places', multer().any(), PlaceRoute);

mongoose
  .connect('mongodb://127.0.0.1:27017/gastronomique')
  .then(() => {
    console.log('Connected to the database');
    app.listen(3000, () => {
      console.log('Server started on port 3000');
    });
  })
  .catch((err) => {
    console.log(`Error connecting to the database: ${err}`);
  });

module.exports = app;