exports.run = (client, message, args) => {
  let role = args.join(' ');
  let myRole = message.guild.roles.find("name", `${role}`);

  let member = message.member;

  member.removeRole(myRole).catch(console.error);
  message.channel.send(`You have successfully left ${role}!`);

}
