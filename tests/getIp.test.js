/**
 * @jest-environment jsdom
 */

const { getIp } = require('../HELPERS/getIp');

describe('Testes da function getIp', () => {
  it('1 - if getIp is a function', async () => {
    expect(typeof getIp).toBe('function');
  })
  // it('', () => {

  // })
});