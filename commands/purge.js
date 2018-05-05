exports.run = (client, message, args) => {
  const modRole = message.guild.roles.find("name", "Admin");
  let numberOfMessages = args.join(` `);

  if(!message.member.roles.has(modRole.id))
    return message.reply('You do not have sufficient permissions to use this command.');
  message.channel.bulkDelete(numberOfMessages).then(() => {
    message.channel.send(`Deleted ${numberOfMessages} messages.`).then(msg => msg.delete(5000));
  });
}
