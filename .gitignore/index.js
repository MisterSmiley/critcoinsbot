const Discord = require("discord.js");
const client = new Discord.Client();

const token = "NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA";
var prefix = "c!";
var mention = "<@402192459549114378>";
var memberCount = client.users.size;
var servercount = client.guilds.size;

client.on("ready", function() {
    bot.user.setGame("c!help | critcoins.tk")
    
});

client.on('message', message => {
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

client.login(NDAyMTkyNDU5NTQ5MTE0Mzc4.DT1SmQ.g7ffYVv48FCuqPpFgB7uJqAMtpA)
