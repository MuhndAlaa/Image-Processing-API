import { ImageProps } from "../../interfaces/interfaces";
import {isImgAvailable , getImgsNames} from "./../../file";

async function validation(image: ImageProps): Promise<null | string> {

  const width: number = parseInt(image.width || "0");
  const height: number = parseInt(image.height || "0");

  
  if (!(await isImgAvailable(image.filename))) {
    const availableImageNames: string = (
      await getImgsNames()
      ).join(", ");
    return `Please chose a valid file name from the following: ${availableImageNames}.`;
  }

  if (!image.width && !image.height) return null;

  if (Number.isNaN(height) || height < 1)  return "Please enter height above 1";

  if (Number.isNaN(width) || width < 1)  return "Please enter width above 1";

  return null;
}

export default validation;
