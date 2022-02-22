import express from 'express';
import images from './api/images';
import { template } from './helper';

const routes = express.Router();
routes.use('/api/images', images);

routes.get('/',
  (req, res) => {
    res.send(template);
  }
);

export default routes;
