const Discord = require('discord.js');
const client = new Discord.Client();
const config = require("./config.json");
const filter = ['fuck', 'shit', 'dick', 'ass', 'bitch', 'cunt', 'nigga', 'nigger'];

client.on('ready', () => {
  console.log("I am ready to go!");
  client.user.setActivity('v.1.0.1');
  client.user.setUsername('Hyperbot')
});

client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  console.log(`I have joined ${guild.name} at ${new Date()}`);
});

client.on('guildMemberAdd', member => {
  const botsuff = client.channels.get('347560651692048386');
  const channel = client.channels.get('324039879434567680');
  let embed = new Discord.RichEmbed()
  .setThumbnail('https://cdn.discordapp.com/attachments/347571405241712641/402183718707396608/IMG_1928.JPG')
  .setColor('#350044')
  .setTimestamp()
  .addField("Yee-haw!",
    "Welcome " + member.user.toString() + `! Make sure to read ${channel} and select your event by going to ${botsuff} and using ?\`[your event]\``)
  channel.send({embed: embed});
});

client.on('guildMemberRemove', member => {
  const channel = client.channels.get('324039879434567680');
  let embed = new Discord.RichEmbed()
  .setColor('#350044')
  .setTimestamp()
  .setDescription(member.user.toString() + ' has left the server. :(')
  channel.send({embed: embed});
});

client.on(('message'), message => {
  if (message.author.bot) return;
  const vent = client.channels.get('400872483470966785');

  if (filter.some(word => message.content.toLowerCase().includes(word.toLowerCase()))) {
    if(message.channel == vent) return;
    message.delete();
  }

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(config.prefix)){
    try {
      let commandFile = require(`./commands/${command}.js`);
      commandFile.run(client, message, args);
    } catch (err) {
      console.error(err);
    }
  }

});

client.login(config.token)
