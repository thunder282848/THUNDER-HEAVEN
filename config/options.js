/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const fs = require("fs");
const yaml = require("js-yaml");

const YML = yaml.load(fs.readFileSync("./config.yml", "utf8"));

module.exports = {
  spotify: {
    id: YML.SPOTIFY.ID,
    secret: YML.SPOTIFY.SECRET,
  },

  bot: {
    owners: YML.BOT.OWNERS,
    admins: YML.BOT.ADMINS,
    moderators: YML.BOT.MODERATORS,
    staff: YML.BOT.STAFF,
  },

  links: {
    support: YML.LINKS.SUPPORT,
    mongoURI: YML.LINKS.MONGO_URI,
    patreon: YML.LINKS.PATREON,
    voting: YML.LINKS.VOTING,
    hosting: YML.LINKS.HOSTING,
    hostingsupport: YML.LINKS.HOSTINGSUPPORT
  },
  webhooks: {
    error: YML.WEBHOOKS.ERROR,
    static: YML.WEBHOOKS.STATIC,
    server: YML.WEBHOOKS.SERVER,
    player: YML.WEBHOOKS.PLAYER,
    command: YML.WEBHOOKS.COMMAND,
  },
};
