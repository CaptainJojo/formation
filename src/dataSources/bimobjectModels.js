import PSQLDataSource from './psql-data-source';
import Dataloader from 'dataloader';

export default class BimobjectModelDataSource extends PSQLDataSource{


transformResults(result){
    return result.software = {
        id: result.software_id,
        name: result.software_name
    }
}

async GetModels(bimobjectId){
    const results = await this.getModelsDataloader().load(bimobjectId);
    return results.map(result => ({
        ...result,
        software: {
            id: result.software_id,
            name: result.software_name
        }
    }));
    
}

getModelsDataloader(){

    if(!this.modelDataloader){
        this.modelDataloader = this.createGetModelsDataloader();
    }

    return this.modelDataloader;
}

createGetModelsDataloader(){
    return new Dataloader(
        async bimobjectIds => {
            const results = await this.knexConnection
            .select('bimobject_id', 'bimobject_models.id', 'bimobject_models.name', 'softwares.id as software_id', 'softwares.name as software_name')
            .from('bimobject_models')
            .join('softwares', 'softwares.id', '=','bimobject_models.software_id')
            .whereIn('bimobject_id', bimobjectIds);
            return bimobjectIds.map(id => results.filter(result => result.bimobject_id === id));
        },
        {
            cache: false
        }
    )
}

}

