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
        try {
            const { latitude, longitude, veiculo_id } = request.body;
            
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
    async update(request, response, next) {
        try {
            const { latitude, longitude, veiculo_id} = request.body;
            const { id } = request.params;

            await connection('posicao_veiculo').update({
                latitude, 
                longitude, 
                veiculo_id
            }).where({ id })

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    }, 
    async delete(request, response, next) {
        try {
            const { id } = request.params

            await connection('posicao_veiculo')
                .where({ id })
                .del()

            return response.send()
        } catch (error) {
            next(error)
        }
    }
}