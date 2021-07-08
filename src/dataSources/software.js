import PSQLDataSource from './psql-data-source';
import Dataloader from 'dataloader';

export default class SoftwareDataSource extends PSQLDataSource{

async GetSoftware(softwareId){
    return await this.getSoftwareDataloader().load(softwareId);
}

getSoftwareDataloader(){

    if(!this.softwareDataloader){
        this.softwareDataloader = this.createGetSoftwareDataloader();
    }

    return this.softwareDataloader;
}

createGetSoftwareDataloader(){
    return new Dataloader(
        async bimobjectModelIds => {
            const results = await this.knexConnection
            .select('id')
            .from('softwares')
            .whereIn('id', bimobjectIds);
            return bimobjectModelIds.map(id => results.filter(result => result.bimobject_id === id));
        },
        {
            cache: false
        }
    )
}

}

