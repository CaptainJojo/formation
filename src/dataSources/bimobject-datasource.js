import PSQLDataSource from './psql-data-source';

export default class BimobjectDataSource extends PSQLDataSource{

async GetBimObjects(first, after){
    const results = await this.knexConnection
    .select('id')
    .from('bimobjects')
    .where('id','>',after ?? 0)
    .orderBy('id', 'desc')
    .limit(first+1);
    return results;
}

}
