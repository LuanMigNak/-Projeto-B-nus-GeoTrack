/**
 * @jest-environment jsdom
 */

 const { createMap } = require('../HELPERS/getIp');

 describe('Testes da function createMap', () => {
   it('1 - if createMap is a function', async () => {
     expect(typeof createMap).toBe('function');
   })
 });