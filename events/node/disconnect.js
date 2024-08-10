/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

module.exports = {
  name: "disconnect",
  run: async (client, name, players, moved) => {
    client.log(`Lavalink ${name}: Disconnected`, "warn");
  },
};
