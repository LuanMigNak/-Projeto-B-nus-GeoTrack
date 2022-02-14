/**
 * @jest-environment jsdom
 */

 const { getIpData } = require('../HELPERS/searchEvent');
 const item = require('../mocks/item');
 
 describe('Testes da function searchEvent', () => {
   it('1 - if searchEvent is a function', async () => {
     expect(typeof getIpData).toBe('function');
   })
   // it('', () => {
 
   // })
 });