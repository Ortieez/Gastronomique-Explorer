import express = require('express');
import mongoose from 'mongoose';
import morgan = require('morgan');
import PlaceRoute from './routes/PlaceRoute';
import multer from 'multer';
import path from 'path';

const app = express();
app.use(express.json());
app.use(morgan('tiny'));
app.use('/api/places', multer().any(), PlaceRoute);

app.get('/api/docs', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'assets', 'redoc.html'));
});

app.get('/api/docs/docs.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'src', 'assets', 'docs.yaml'));
});

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