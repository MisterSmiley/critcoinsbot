const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", ready => {
    bot.user.setGame("dev le SmileyBot")
});
