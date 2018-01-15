const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA';

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
  if (message.content === 'Quel est mon avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  if(message.content === 'ping')) {
    message.channel.send('pong').then(sent => {
    sent.edit("Votre ping est à **"+`${sent.createdTimestamp - message.createdTimestamp}`+"** ms");
});
client.login(NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA)
