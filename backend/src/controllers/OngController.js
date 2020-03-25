/**
 * Importando as dependências do controller
 */
const crypto = require('crypto');
const connection = require('../database/connection');

/**
 * Aqui dentro vai os códigos do CRUD
 */
module.exports = {
  async index(request, response){
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  async create(request, response){
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })
    return response.json({ id })
  }
}