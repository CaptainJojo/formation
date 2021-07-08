import knex from 'knex';

const knexConnection = knex({
    client: 'pg',
    connection: {
      host : 'devsql.bimandco.com',
      user : 'postgres',
      password : 'JuVT75XX',
      database : 'BIMANDCO_DEV'
    },
  });

  export default knexConnection;