/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const genButtons = require("@gen/playerButtons.js");
module.exports = updateEmbed = async (client, player) => {
  if (player.data.get("message")) {
    let message = await player.data.get("message");

    message
      .edit({
        components: [
          genButtons(
            client,
            player,
            message?.components[0]?.components?.length,
          )[0],
        ],
      })
      .catch(() => {});
  }
};
