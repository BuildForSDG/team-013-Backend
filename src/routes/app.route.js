/** Holds the routes for the app.controller */
/* eslint-disable linebreak-style */
import express from 'express';
import Appcontrol from '../controllers/index';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello, Welcome to the REST API service of team 013 [The T-Grad] project');
});
router.get('/profile', (req, res) => {
  Appcontrol.getAll();
});
router.post('/profile', (req, res) => {
  Appcontrol.control();
});

router.get('/profile/:id', (req, res) => {
  Appcontrol.getOne(req.param.id);
});
router.put('/profile/:id', (req, res) => {
  Appcontrol.getOne(req.param.id);
});

router.delete('/profile/:id', (req, res) => {
  Appcontrol.delete(req.param.id);
});

export default router;
