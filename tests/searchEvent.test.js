/**
 * @jest-environment jsdom
 */

 const { getIpData } = require('../HELPERS/searchEvent');
 const item = require('../mocks/item');
 
 describe('Testes da function getIpData', () => {
   it('1 - if getIpData is a function', async () => {
     expect(typeof getIpData).toBe('function');
    });
});