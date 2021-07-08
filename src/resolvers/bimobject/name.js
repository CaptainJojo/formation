import knexConnection from '../../config/db';

export default async ({id}, args, context, info) => {
    return context.dataSources.bimobjectLang.GetDefaultName(id);
  };