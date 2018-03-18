const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on("ready", ready => {
    bot.user.setGame("Michael Jackson - ")
});

bot.on('ready', () => {
  console.log("AlphaBot is ready")
  setInterval(function(){
    guilds = ["Michael Jackson - Beat It", "Michael Jackson - Billie Jean", "Michael Jackson - Thriller Thriller"]
    lecture = Math.floor((Math.random() * guilds.length));
    bot.user.setPresence({
      game:{
        name: `${guilds[lecture]}`, 
        type: 3
      }
    });
  }, 60000);  
});

bot.login(process.env.TOKEN);
