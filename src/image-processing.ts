import sharp from "sharp";
import {sharpSetting}from "./interfaces/interfaces";

const resizeImage = async (image: sharpSetting) => {
  try {
    await sharp(image.source)
      .resize(image.width, image.height)
      .toFormat("jpeg")
      .toFile(image.target);
    return null;
  }catch {
    return "Image cannot be processed.";
  }
};

export default resizeImage;
