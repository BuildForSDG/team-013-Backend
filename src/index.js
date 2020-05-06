/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './routes/app.route';

const port = process.env.PORT || 5000;
const app = express();

// initialize middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello Inventors, Serve your static files here');
});
app.use('/api', router);

mongoose.Promise = global.Promise;

// Uncomment bellow to connect to your mongodb instance

// mongoose.connect('mongodb://localhost:27017/teacherdb')
//   .then(() => {
//     console.log('mongodb started.');
//     app.listen(8000, () => {
//       console.log('Server started on 8000');
//     });
//   }).catch(() => {
//     console.log('Mongodb connection failed.');
//   });

app.listen(port, () => console.log(`Running on port. ${port}`));
