const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("c!help | CoinsBot");
    console.log("Le Bot est connecté")

});

bot.login("NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1KcQ.atV3-7qA5bX5hJQtM_ogNlK6ehs");
