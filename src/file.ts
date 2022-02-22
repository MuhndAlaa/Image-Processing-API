import { promises as fs } from "fs";
import { ImageProps } from "./interfaces/interfaces";
import path from "path";
import resizeImage from "./image-processing";

const imagesFullPath = path.resolve(__dirname, "../assets/images/full");
const imagesResizedPath = path.resolve(__dirname, "../assets/images/resized");

async function getImgPath(props: ImageProps): Promise<null | string> {
    if (!props.filename) {
        return null;
    }

    const filePath: string =
        props.width && props.height
            ? path.resolve(
                  imagesResizedPath,
                  `${props.filename}-${props.width}x${props.height}.jpg`
              )
            : path.resolve(imagesFullPath, `${props.filename}.jpg`);

    return fs
        .access(filePath)
        .then(() => filePath)
        .catch(() => null);
}

async function isImgAvailable(filename: string = ""): Promise<boolean> {
    if (!filename) return false;
    return getImgsNames().then((res) => res.includes(filename));
}

function getImgsNames(): Promise<string[]> {
    let images: string[];

    return fs
        .readdir(imagesFullPath)
        .then((res) => {
            images = res.map(
                (filename: string): string => filename.split(".")[0]
            );
            return images;
        })
        .catch(() => []);
}

async function isResizedAvailable(props: ImageProps): Promise<boolean> {
    if (!props.filename || !props.width || !props.height) return false;

    const filePath: string = path.resolve(
        imagesResizedPath,
        `${props.filename}-${props.width}x${props.height}.jpg`
    );
    return fs
        .access(filePath)
        .then(() => true)
        .catch(() => false);
}

function createResizedPath(): Promise<void | null> {
    return fs
        .access(imagesResizedPath)
        .then(() => null)
        .catch(() => fs.mkdir(imagesResizedPath));
}

async function createResized(props: ImageProps): Promise<null | string> {
    if (!props.filename || !props.width || !props.height) return null;

    const filePathFull: string = path.resolve(
        imagesFullPath,
        `${props.filename}.jpg`
    );
    const filePathResized: string = path.resolve(
        imagesResizedPath,
        `${props.filename}-${props.width}x${props.height}.jpg`
    );

    return await resizeImage({
        source: filePathFull,
        target: filePathResized,
        width: parseInt(props.width),
        height: parseInt(props.height),
    });
}

export {
    imagesFullPath,
    imagesResizedPath,
    getImgPath,
    isImgAvailable,
    getImgsNames,
    isResizedAvailable,
    createResizedPath,
    createResized,
};
