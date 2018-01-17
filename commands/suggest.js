exports.run = (client, message) => {
  const Discord = require('discord.js');
  const args = (message).content.trim.split(/ +/g)
  const suggestion = args.join(` `);

  let embed = new Discord.RichEmbed()
}
