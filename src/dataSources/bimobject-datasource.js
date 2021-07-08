import PSQLDataSource from './psql-data-source';

export default class BimobjectDataSource extends PSQLDataSource{

async GetBimObjects(){
    const results = await this.knexConnection
    .select()
    .from('bimobjects')
    .limit(10);
    return results;
}

}

