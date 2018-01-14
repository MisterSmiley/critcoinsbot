const discord require = ("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("c!help | CoinsBot");
    console.log("Le Bot est connecté")
});
	
bot.on('message', message => {
	if (message.content === ("c!ping")){
	message.reply('pong !');
} else if (message.content === ("bvn")){
	message.reply('Bienvenue petit nouveau :wink:');
} else if(message.content.startsWith('!botname')){
	client.user.setUsername(message.content.substr(9));
} else if (message.content === "!stats") {
	let m = " ";
	m += 'Il y a actuellement  ${message.guild.channels.size} channels sur ce serveurs \n';
	m += 'je suis en compagnie de ${message.guild.members.size} membres';
	m += 'je suis présent dans ${client.guild.size} serveurs \n';
	message.author.sendMessage(m).catch(console.log); 
}
});

bot.login("NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1KcQ.atV3-7qA5bX5hJQtM_ogNlK6ehs");
