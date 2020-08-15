const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('veiculo')
            .select([
                'veiculo.*',
            ]);

        return response.json(parada);
    },
    async getVeiculoLinha(request, response) {
        const { linha_id } = request.query;

        const veiculo = await connection('veiculo')
            .select('*')
            .whereIn('linha_id', linha_id.value );

        console.log(veiculo);

        return response.json(veiculo);
    },
    async create(request, response, next) {
        const { name, modelo, linha_id } = request.body;

        console.log(name, modelo, linha_id)
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
    async update(request, response, next) {
        try {
            const { name, modelo, linha_id } = request.body;
            const { id } = request.params;

            await connection('veiculo').update({
                name,
                modelo,
                linha_id,
            }).where({ id })

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params

            await connection('veiculo')
                .where({ id })
                .del()

            return response.send()
        } catch (error) {
            next(error)
        }
    }
}