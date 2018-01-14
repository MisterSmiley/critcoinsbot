const Discord = require('discord.js');
const client = new Discord.Client();

bot.on('ready', function() {
    bot.user.setAvatar('./coin-icon.png').catch(console.error)
    bot.user.setGame(c!help | critcoins.tk).catch(console.error)
})

bot.on('guildMembersAdd', function(member) {
  member.createDM().then(function (channel) {
      return channel.send('Bienvenue sur le Discord Officiel de CritCoins ' + member.displayName)
  }).catch(console.error)
})

bot.on('message', function(message) {
    if (message.content === ('c!ping')
      message.channel.send('pong')
})

client.login(NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA);
