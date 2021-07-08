import PSQLDataSource from './psql-data-source';
import Dataloader from 'dataloader';

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
    return await this.getNameDataloader(lang).load(bimobjectId);
}

getNameDataloader(lang){
    if(!this.nameDataloader){
        this.nameDataloader = [];
    }

    if(!this.nameDataloader[lang]){
        this.nameDataloader[lang] = this.createGetNameDataloader(lang);
    }

    return this.nameDataloader[lang];
}

createGetNameDataloader(){
    return new Dataloader(
        async bimobjectIds => {
            const results = await this.knexConnection
            .select('bimobject_id', 'name')
            .from('bimobject_langs')
            .whereIn('bimobject_id', bimobjectIds)
            .andWhere('language_code', 'fr');
            return bimobjectIds.map(id => results.find(result => result.bimobject_id === id)?.name ?? 'no name');
        },
        {
            cache: false
        }
    )
}

}

