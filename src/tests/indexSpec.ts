import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('Test of two endpoints', (): void => {
  describe('Home endpoint', (): void => {
    it('gets status /', async (): Promise<void> => {
      const res: supertest.Response = await request.get('/');

      expect(res.status).toBe(200);
    });
  });

  describe('Images endpoint', (): void => {
    it('gets valid params', async (): Promise<void> => {
      const res: supertest.Response = await request.get(
        '/api/images?filename=encendaport'
      );

      expect(res.status).toBe(200);
    });

    it('gets /api/images?filename=encenadaport&width=500&height=500 valid params', async (): Promise<void> => {
      const res: supertest.Response = await request.get(
        '/api/images?filename=encenadaport&width=500&height=500'
      );

      expect(res.status).toBe(200);
    });

    it('gets /api/images?filename=encendaport&width=-500&height=500 invalid params', async (): Promise<void> => {
      const res: supertest.Response = await request.get(
        '/api/images?filename=encendaport&width=-500&height=500'
      );

      expect(res.status).toBe(200);
    });

    it('gets /api/images with empty params', async (): Promise<void> => {
      const res: supertest.Response = await request.get('/api/images');

      expect(res.status).toBe(200);
    });
  });

  describe('Wrong endpoint', (): void => {
    it('returns 404 for wrong endpoint', async (): Promise<void> => {
      const res: supertest.Response = await request.get('/fail');

      expect(res.status).toBe(404);
    });
  });
});

