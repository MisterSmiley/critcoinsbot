const discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("c!help | CoinsBot");

});

bot.on('message', function(message) {
    if (message.content === 'c!ping') {
      message.reply('Pong !')
    console.log("Le Bot est connecté")

})

bot.login("NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA");
