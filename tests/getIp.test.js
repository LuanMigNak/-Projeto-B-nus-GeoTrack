/**
 * @jest-environment jsdom
 */

require('../script');
const { getIp } = require('../HELPERS/getIp');

describe('Testes da function getIp', () => {
  it('1 - if getIp is a function', async () => {
    expect(typeof getIp).toBe('function');
  })
  it('2 - if getIp return ?', async () => {
    
  })
  // it('', () => {

  // })
});