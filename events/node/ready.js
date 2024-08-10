/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

module.exports = {
  name: "ready",
  run: async (client, name) => {
    client.log(`Lavalink "${name}" connection established`, "lavalink");
    client.loading247
      ? null
      : await require("@functions/load247players.js")(client);
  },
};
