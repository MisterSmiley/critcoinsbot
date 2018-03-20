const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log("rfkizejijlczznhdili")
  setInterval(function(){
    guilds = ["Michael Jackson - Beat It", "Michael Jackson - Billie Jean", "Michael Jackson - Thriller Thriller"]
    lecture = Math.floor((Math.random() * guilds.length));
    bot.user.setPresence({
      game:{
        name: `${guilds[lecture]}`, 
        type: 1
      }
    });
  }, 60000);  
});

bot.login(process.env.TOKEN);
