/** Holds the routes for the app.controller */
/* eslint-disable linebreak-style */
import express from 'express';
import control from '../controllers/app.controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello, Welcome to the REST API service of team 013 [The T-Grad] project');
});
router.get('/profile', (req, res) => {
  control.getAll();
});
router.post('/profile', (req, res) => {
  control.control();
});

router.get('/profile/:id', (req, res) => {
  control.getOne(req.param.id);
});
router.put('/profile/:id', (req, res) => {
  control.getOne(req.param.id);
});

router.delete('/profile/:id', (req, res) => {
  control.delete(req.param.id);
});

export default router;
