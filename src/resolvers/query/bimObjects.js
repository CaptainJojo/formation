export default async (_, { filter, first, after }, context) => {
    const results = await context.dataSources.bimobject.GetBimObjects(first, after);
    const resultsToSend = results.slice(0, first); 
   
    return {
        edges: resultsToSend.map(result => ({
            node: result,
            cursor: result.id
        })),
        pageInfo: {
            hasNextPage: results.length === (first+1),
            endCursor: results[resultsToSend.length-1].id
        }
    }
}