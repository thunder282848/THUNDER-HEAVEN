/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

module.exports = {
  name: "error",
  run: async (client, name, error) => {
    client.log(`Lavalink "${name}" error ${error}`, "error");
  },
};
