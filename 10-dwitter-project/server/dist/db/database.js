import { config } from "../config.js";
const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.databse,
  password: config.db.password,
});
export const db = pool.promise();
//# sourceMappingURL=database.js.map
