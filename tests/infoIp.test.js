/**
 * @jest-environment jsdom
 */

 const { infoIp } = require('../HELPERS/searchEvent');
 
 describe('Testes da function infoIp', () => {
   it('1 - if infoIp is a function', async () => {
     expect(typeof infoIp).toBe('function');
    });
});