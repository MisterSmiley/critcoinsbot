const discord require = ("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("c!help | CoinsBot");
    console.log("Le Bot est connecté")

});

bot.login("NDAxODQ4NjQ1Mjk0NjIwNjgy.DT0Thg.OSjpjCLMu6q59f-awl3a90bNIbc");
