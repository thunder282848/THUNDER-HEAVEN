/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Feline Hq
 */

module.exports = {
    name: "leaveserver",
    aliases: ['gleave'],
    cooldown: "",
    category: "owner",
    usage: "<serverid>",
    description: "leave a server",
    args: true,
    vote: false,
    new: false,
    admin: true,
    owner: true,
    botPerms: [],
    userPerms: [],
    player: false,
    queue: false,
    inVoiceChannel: false,
    sameVoiceChannel: false,
    execute: async (client, message, args, emoji) => {
        let id = args[0]
        if (!id) {
            return message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setColor(client.color)
                        .setDescription(
                            `${client.emoji.cross} | You didn't provided the server Id.`
                        )
                ]
            })
        }
        let guild = await client.guilds.fetch(id)
        let name = guild?.name || 'No Name Found'
        if (!guild) {
            return message.channel.send({
                embeds: [
                    new MessageEmbed()
                        .setColor(client.color)
                        .setDescription(
                            `${client.emoji.cross} | You didn't provided a valid server Id.`
                        )
                ]
            })
        }
        await guild.leave()
        return message.channel.send({
            embeds: [
                new MessageEmbed()
                    .setColor(client.color)
                    .setDescription(
                        `${client.emoji.tick} | Successfully left **${name} (${id})**.`
                    )
            ]
        })
    }
}
