const connection = require('../database/connection');

module.exports = {
    async index(request, response) {

        const parada = await connection('parada')
            .select([
                'parada.*',
            ]);

        return response.json(parada);
    },

    async create(request, response,next) {
        const { nome, latitude, longitude } = request.body;

        console.log(nome,latitude,longitude)
        try {
            await connection('parada').insert({
                nome,
                latitude,
                longitude,
            })
            return response.status(201).send()
        } catch (error) {
            next(error)
        }


    },
    // async delete(request, response) {
    //     const { id } = request.params;

    //     const ong_id = request.headers.authorization;

    //     const incident = await connection('incidents')
    //         .where('id', id)
    //         .select('ong_id')
    //         .first();

    //     if (incident.ong_id != ong_id) {
    //         return response.status(401).json({ error: 'Operation not permitted.' });
    //     }

    //     await connection('Incidents').where('id', id).delete();

    //     return response.status(204).send();

    // }


}