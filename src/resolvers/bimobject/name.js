import knexConnection from '../../config/db';

export default async ({id}, args, context, info) => {
    const results = await knexConnection
    .select('name')
    .from('bimobject_langs')
    .where('is_default', true)
    .andWhere('bimobject_id', id)
    .limit(2);
    return results[0].name;
  };