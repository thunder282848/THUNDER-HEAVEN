/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const { ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "patreon",
  aliases: ['pat'],
  cooldown: "",
  category: "information",
  usage: "",
  description: "Shows bot's patreon link",
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
      new client.button().link("Click here", client.patreon),
    );
    await message.reply({
      embeds: [
        new client.embed().desc(
          `<:newcmd:1251199109998710794> **Considering joining my Patreon ?**`,
        ),
      ],
      components: [row],
    });
  },
};
