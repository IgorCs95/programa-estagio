const connection = require('../database/connection');

module.exports = {
    async getAll(request, response) {

        const parada = await connection('parada')
            .select([
                'parada.*',
            ]);

        return response.json(parada);
    },
    async create(request, response, next) {
        const { name, latitude, longitude } = request.body;

        try {
            await connection('parada').insert({
                name,
                latitude,
                longitude,
            })
            return response.status(201).send()
        } catch (error) {
            next(error)
        }


    }, 
    async update(request, response, next) {
        try {
            const { name, latitude, longitude } = request.body;
            const { id } = request.params;

            await connection('parada').update({
                name,
                latitude,
                longitude,
            }).where({ id })

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    }, 
    async delete(request, response, next) {
        try {
            const { id } = request.params

            await connection('parada')
                .where({ id })
                .del()


            return response.send()
        } catch (error) {
            next(error)
        }
    }
}