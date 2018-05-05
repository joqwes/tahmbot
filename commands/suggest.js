/*exports.run = (client, message) => {
  const Discord = require('discord.js');
  const args = message.content.trim().split(/ +/g)
  const suggestion = args.slice(0, 7).join(` `);
  const channel = client.channels.get('402989146517536784');

  let embed = new Discord.RichEmbed()
  .setColor('#350044')
  .addField(`${message.author.username}\'s suggestion:`,
  `${suggestion}`)
  channel.send({embed: embed});
}
*/
