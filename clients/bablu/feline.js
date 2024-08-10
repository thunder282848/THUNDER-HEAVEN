/** @format
 *
 * FELINE By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const YML = require("js-yaml").load(
  require("fs").readFileSync("./config.yml", "utf8"),
);
const bot = require("../../main/extendedClient");

const client = new bot();
require("@utils/antiCrash")(client);
client.connect(
  YML.FELINE.TOKEN,
  YML.FELINE.PREFIX,
  YML.FELINE.EMOJIS,
  YML.FELINE.COLOR,
  YML.FELINE.TOPGGAUTH,
  YML.FELINE.VOTEURI,
);
module.exports = client;
