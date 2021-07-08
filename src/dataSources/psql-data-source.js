import {DataSource} from 'apollo-datasource';

export default class PSQLDataSource extends DataSource {
    constructor(knexConnection, normalize = (data) => data) {
        super();

        this.normalize = normalize;
        this.knexConnection = knexConnection;
    }
}