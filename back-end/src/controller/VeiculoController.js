const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('veiculo')
            .select([
                'veiculo.*',
            ]);

        return response.json(parada);
    },

    async create(request, response,next) {
        const { name, modelo, linha_id } = request.body;

        console.log(name,modelo,linha_id)
        try {
            const veiculo = await connection('veiculo').insert({
                name,
                modelo,
                linha_id,
            })
            return response.status(201).send().json(veiculo)
        } catch (error) {
            next(error)
        }


    },
}