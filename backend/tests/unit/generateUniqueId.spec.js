const generateUniqueId = require('../../src/utils/generateUniqueId');
/**
 * descrever o que a função deve fazer
 */
describe('Generate Unique ID', () => {
  it('should generate an unique ID', () => {
    const id = generateUniqueId();
    
    expect(id).toHaveLength(8);
  })
})