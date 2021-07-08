import PSQLDataSource from './psql-data-source';

export default class BimobjectLangDataSource extends PSQLDataSource{

async GetDefaultName(bimobjectId){
    const results = await this.knexConnection
    .select('name')
    .from('bimobject_langs')
    .where('is_default', true)
    .andWhere('bimobject_id', bimobjectId);
    return results[0]?.name ?? 'no name';
}

async GetName(bimobjectId, lang){
    const results = await this.knexConnection
    .select('name')
    .from('bimobject_langs')
    .where('language_code', lang)
    .andWhere('bimobject_id', bimobjectId);
    return results[0]?.name ?? this.GetDefaultName(bimobjectId);
}

}

