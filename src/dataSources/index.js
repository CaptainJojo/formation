import knexConnection from "../config/db"
import BimobjectDataSource from "./bimobject-datasource"
import BimobjectLangDataSource from "./bimobjectLangs"

export default {
  bimobject: new BimobjectDataSource(knexConnection),
  bimobjectLang: new BimobjectLangDataSource(knexConnection),
}