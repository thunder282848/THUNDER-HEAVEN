/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

module.exports = {
  name: "playerEnd",
  run: async (client, player) => {
    if (player.data.get("message"))
      player.data
        .get("message")
        ?.delete()
        .catch(() => {});
  },
};
