import "traceur/bin/traceur-runtime";
import * as db from "./db";
import * as util from "./util";

export function start() {
  util.initConfig();
  db.initDb();
}

// function generateKeys() {
// }
