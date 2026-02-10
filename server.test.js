const request = require('supertest');
const app = require('./server');

describe('Testy Aplikacji', () => {
  
 it('Powinien zwrócić powitanie na GET /', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toEqual(200);
});

  it('Powinien zwrócić listę produktów na GET /products', async () => {
    const res = await request(app).get('/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
    expect(res.body.length).toBeGreaterThan(0);
  });
});