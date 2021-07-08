import knexConnection from '../../config/db';

export default async (_, { filter }) => {
    const results = await knexConnection
    .select()
    .from('bimobjects')
    .limit(2);
    return results;
}