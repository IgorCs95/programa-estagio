const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('linha')
            .select([
                'linha.*',
            ]);

        return response.json(parada);
    },

    

    async create(request, response, next) {
        const { name, parada } = request.body;

        try {

            await connection('linha').insert({
                name,
            })


            return response.status(201).send()
        } catch (error) {
            next(error)
        }
    },
    async update(request, response, next) {
        try {
            const { name, latitude } = request.body;
            const { id } = request.params;

            await connection('linha').update({
                name,
            }).where({ id })

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    },
    async delete(request, response, next) {
        try {
            const { id } = request.params

            await connection('linha')
                .where({ id })
                .del()

            return response.send()
        } catch (error) {
            next(error)
        }
    }
}