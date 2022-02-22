import express from 'express';
import  {getImgPath , isResizedAvailable , createResized} from './../../file';
import validation from './helper';

const images = express.Router();

images.get('/', async (req,res): Promise<void> => {

    let error: null | string = '';
    const validationMessage = await validation(req.query);
  
    if (validationMessage) {
      res.send(validationMessage);      
      return;
    }

    if (!(await isResizedAvailable(req.query))) error = await createResized(req.query);

    if (error) {
      res.send(error);
      return;
    }

    const path = await getImgPath(req.query);
    if (path) {
      res.sendFile(path);
    } else {
      res.send('Something Went Wrong...');
    }

  }
);

export default images;


