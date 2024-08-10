/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Feline Hq
 */

module.exports = {
  name: "profile",
  aliases: ["pr"],
  cooldown: "",
  category: "information",
  usage: "",
  description: "See server configs",
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
    let [pfx, premiumUser, dev, admin, moderator, team] = await Promise.all([
      await client.db.pfx.get(`${client.user.id}_${message.author.id}`),
      await client.db.premium.get(`${client.user.id}_${message.author.id}`),
      await client.owners.find((x) => x === message.author.id),
      await client.admins.find((x) => x === message.author.id),
      await client.moderators.find((x) => x === message.author.id),
      await client.staff.find((x) => x === message.author.id),
    ]);

    let premium =
      premiumUser == true
        ? "Lifetime"
        : premiumUser
          ? `Expiring <t:${`${premiumUser}`?.slice(0, -3)}:R>`
          : `\`Not Activated\``;

    await message
      .reply({
        embeds: [
          new client.embed()

            .setAuthor({
              name: `Profile Overview`,
              iconURL: client.user.displayAvatarURL(),
            })
            .desc(
                `**Acknowledgement/(s) :**\n\n` +
                `${dev ? `<:developerfeline:1251735407176060949> - **Developer**\n` : ``}` +
                `${admin ? `<a:Admin:1236347812984389713> - **Administrator**\n` : ``}` +
                `${moderator ? `<:Moderator:1256832341846921236> - **Moderator**\n` : ``}` +
                `${team ? `<:staff:1256832451385360477> - **Staff**\n` : ``}` +
                `${
                  premiumUser ? `<a:premium:1251217386854678772> - **Premium Subscriber**\n` : ``
                }` +
                `<:Feline_User:1251734396617359411> - **Feline User**\n\n` +
                `**Premium : ${premium}**\n` +
                `**Custom Prefix : ${pfx ? `\`${pfx}\`` : `\`Not set\``}**\n\n` 
            )

            .thumb(message.member.displayAvatarURL())
        ],
      })
      .catch(() => {});
  },
};
