/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const { ActionRowBuilder, StringSelectMenuBuilder } = require("discord.js");

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: "",
  usage: "",
  description: "Shows bot's help menu",
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
    let categories = await client.categories.filter((c) => c != "owner");
    categories = categories.sort((b, a) => b.length - a.length);
    
    let cat = categories
      .map(
        (c) =>
          `> **${emoji[c]} • ${
            c.charAt(0).toUpperCase() + c.slice(1)
          } Commands**\n`,
      )
      .join("");

    let arr = [];
    for (cat of categories) {
      cmnds = client.commands.filter((c) => c.category == cat);
      arr.push(cmnds.map((c) => `\`${c.name}\``));
    }
    let allCmds = await categories.map(
      (cat, i) =>
        `• **[${cat.charAt(0).toUpperCase() + cat.slice(1)}](${
          client.support
        }) [${arr[i].length}]\n ${arr[i].join(", ")}**`,
    );
    let desc = allCmds.join("\n\n");

    const embed = new client.embed()
      .setAuthor({
        name: `Help Menu!`,
        iconURL: client.user.displayAvatarURL(),
      })
      .desc( `Use \`${client.prefix}help\` followed by a command name to get more additional information on a command. For example: \`${client.prefix}help play\`.\n\n${desc}`)
      .thumb(client.user.displayAvatarURL())
      .setFooter({
        text: `© ${client.user.username} | Use (cmd -h) for command infoㅤㅤㅤ ㅤㅤ ㅤㅤㅤ`,
        iconURL: "https://cdn.discordapp.com/attachments/1249194804911276033/1251417954994618419/feline.jpeg?ex=666e814a&is=666d2fca&hm=ed8a8158cb1f39e93724d40c0f73db5bd4c543669d62103c662bc753fa939f16&",
        //text: `Kyoko Is Love`,
      });

    await message.channel.send({ embeds: [embed] });
  },
};
