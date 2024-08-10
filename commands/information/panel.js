/** @format
 *
 * Kyoko By Doubiest
 * Version: 6.0.0-beta
 * © 2024 Nemesis-Dev
 */

const { ActionRowBuilder } = require("discord.js");

module.exports = {
  name: "panel",
  aliases: ["host"],
  cooldown: "",
  category: "information",
  usage: "",
  description: "Shows Hosting Info",
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
      new client.button().link("Click to Checkout", client.hosting),
    );
    await message.reply({
      embeds: [
        new client.embed()
        .title('ELIXIOR HOSTING')
        .desc(
          
             
            `**[VPS PRODUCTS](https://client.elixior.cloud?ref=JUPIVERSE) :**\n` +
            `⠀• Virtual Private Servers (XEON)\n` +
            `⠀• Semi Dedicated Servers for High CPU Usage <:news:1264244724873691198>\n\n` +
            
            `**[DISCORD HOSTING](https://client.elixior.cloud?ref=JUPIVERSE) :**\n` +
            `⠀• Dedicated Servers (Essential & Game)\n` +
            `⠀• Game Servers (Minecraft)<:news:1264244724873691198>\n\n` +
            
            `**[DDOS?](https://client.elixior.cloud?ref=JUPIVERSE) :**\n` +
    `⠀• Elixior Hosting is all under an Advanced DDOS Protection.<:news:1264244724873691198>\n\n`,
        )
        .setFooter({ text: `Selection menu timed out / cancelled!` })
        .setImage('https://example.com/image.png'),
        
        
      ],
      components: [row],
      
    });
    
  },
};
