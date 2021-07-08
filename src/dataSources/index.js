import knexConnection from "../config/db"
import BimobjectDataSource from "./bimobject-datasource"
import BimobjectLangDataSource from "./bimobjectLangs"
import BimobjectModelDataSource from "./bimobjectModels"

export default {
  bimobject: new BimobjectDataSource(knexConnection),
  bimobjectLang: new BimobjectLangDataSource(knexConnection),
  bimobjectModels: new BimobjectModelDataSource(knexConnection),
}