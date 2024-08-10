/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis Dev
 */

const { ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "vote",
  aliases: [],
  cooldown: "",
  category: "config",
  usage: "",
  description: "Shows bot's vote link",
  args: false,
  vote: false,
  new: false,
  admin: false,
  owner: false,
  botPerms: [],
  userPerms: [],
  player: false,
  queue: false,
  inVoiceChannel: false,
  sameVoiceChannel: false,
  execute: async (client, message, args, emoji) => {
    const row = new ActionRowBuilder().addComponents(
      new client.button().link("Click here", client.voting),
    );
    await message.reply({
      embeds: [
        new client.embed().desc(
          `${emoji.vote} **Considering voting me ?**`,
        ),
      ],
      components: [row],
    });
  },
};
