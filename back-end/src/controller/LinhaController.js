const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('linha')
            .select([
                'linha.*',
            ]);

        return response.json(parada);
    },

    async create(request, response,next) {
        const { name, paradas } = request.body;

        try {
            await connection('linha').insert({
                name,
                paradas,
            })
            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    },
}