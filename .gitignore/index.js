const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('je suis prêt!');
})

client.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`Bienvenue sur le serveur, ${member}!`);
});
client.on('guildMemberRemove', member => {
  member.guild.defaultChannel.send(`${member} à quitter le serveur!`);
});

client.on('message', message => {
  if (message.content === 'avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if(message.content === 'ping')) {
    message.channel.send('pong').then(sent => {
    sent.edit("Votre ping est à **"+`${sent.createdTimestamp - message.createdTimestamp}`+"** ms");
});
client.login(process.env.TOKEN)
