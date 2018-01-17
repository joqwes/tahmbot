exports.run = (client, message, args) => {
  const Discord = require(`discord.js`);
  const suggestions = client.channels.get(`402989146517536784`);
  let embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/347571405241712641/402183718707396608/IMG_1928.JPG')
  .setColor('#350044')
  .setTimestamp()
  .setDescription(`Here are all the commands for Hyperbot:`)
  .addBlankField(true)
  .addField(`+ping`,
    `Test command just to make sure the bot is working!`)
  .addField(`+join \`[EVENT]\``,
    `Join your event so you're able to see the correct channels!`)
  .addField(`+leave \`[EVENT]\``,
    `Leave an event so you no longer see the channels for that event.`)
  .addBlankField(true)
  .addField(`MORE COMMANDS WILL BE ADDED SOON`,
    `Please be patient as new features are added to the bot! If you would like to see new stuff added, feel free to suggest it in ${suggestions}!`)
  message.channel.send({embed: embed});
}
