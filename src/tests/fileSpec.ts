import { promises as fs } from 'fs';
import path from 'path';
import {imagesResizedPath , createResized } from './../file';

describe('Test image processing via sharp', (): void => {
  it('Invalid wrong width param', async (): Promise<void> => {
    const error: null | string = await createResized({
      filename: 'encenadaport',
      width: '-500',
      height: '500'
    });
    expect(error).not.toBeNull();
  });

  it('Invalid wrong height param', async (): Promise<void> => {
    const error: null | string = await createResized({
      filename: 'encenadaport',
      width: '500',
      height: '-500'
    });
    expect(error).not.toBeNull();
  });

  it('Invalid wrong image name param', async (): Promise<void> => {
    const error: null | string = await createResized({
      filename: 'fail',
      width: '500',
      height: '500'
    });
    expect(error).not.toBeNull();
  });

  it('succeeds to write resized resized file', async (): Promise<void> => {
    await createResized({ filename: 'encenadaport', width: '500', height: '500' });

    const resizedImagePath: string = path.resolve(
      imagesResizedPath,
      `encenadaport-500x500.jpg`
    );
    let errorFile: null | string = '';
    try {
      await fs.access(resizedImagePath);
      errorFile = null;
    } catch {
      errorFile = 'File was not created';
    }

    expect(errorFile).toBeNull();
  });
});


