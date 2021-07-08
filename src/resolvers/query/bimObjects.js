export default async (_, { filter }, context) => {
    return context.dataSources.bimobject.GetBimObjects();
}