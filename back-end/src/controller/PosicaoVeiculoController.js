const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('posicao_veiculo')
            .select([
                'posicao_veiculo.*',
            ]);

        return response.json(parada);
    },

    async create(request, response,next) {
        const { latitude, longitude, veiculo_id } = request.body;

        console.log(latitude, longitude, veiculo_id)

        try {
            await connection('posicao_veiculo').insert({
                latitude, 
                longitude, 
                veiculo_id
            })
            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    },
}