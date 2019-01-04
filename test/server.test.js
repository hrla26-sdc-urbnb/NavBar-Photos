const app = require('../rest-server/app');
const request = require('supertest');

describe('The server should', () => {
    test('respond to get requests', () => (
        request(app).get('/api/1').expect(200)
    ));
    test('send data back', () => (
        request(app).get('/api/1').expect('Content-Type', /json/)
    ));
});


// describe.each([[1, 1, 2], [1, 2, 3], [2, 1, 3]])(
//     '.add(%i, %i)',
//     (a, b, expected) => {
//       test(`returns ${expected}`, () => {
//         expect(a + b).toBe(expected);
//       });
  
//       test(`returned value not be greater than ${expected}`, () => {
//         expect(a + b).not.toBeGreaterThan(expected);
//       });
  
//       test(`returned value not be less than ${expected}`, () => {
//         expect(a + b).not.toBeLessThan(expected);
//       });
//     },
//   );
