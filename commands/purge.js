exports.run = (client, message, args) => {
  let numberOfMessages = args.join(` `);

  channel.bulkDelete(numberOfMessages)
    .then(messages => message.channel.send(`Purged ${messages.size} from the channel.`))
    .catch(console.error);
}
