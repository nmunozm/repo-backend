const request = require('supertest');
const app = require('./index'); // Importamos nuestra app

describe('Pruebas de la ruta raíz', () => {
  
  test('Debería responder con un 200 y un JSON correcto', async () => {
    const response = await request(app).get('/');
    
    expect(response.statusCode).toBe(200);
    expect(response.body.mensaje).toBe('¡Hola!');
  });

});