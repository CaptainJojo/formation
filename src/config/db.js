import knex from 'knex';
import logger from '../plugins/knex-logger';

const knexConnection = knex({
    client: 'pg',
    connection: {
      host : 'devsql.bimandco.com',
      user : 'postgres',
      password : 'JuVT75XX',
      database : 'BIMANDCO_DEV'
    },
  });

  export default logger(knexConnection);