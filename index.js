require('dotenv').config();
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "$help") {      
    msg.channel.type === (`"dm"`) + msg.author.send("Hello and welcome to the support bot for ARTCvan's Hotel. Commands start with $. A list is available on: https://github.com/ARTCvan/ARTCvanHotelDiscordBot/blob/main/README.md") 
  }
  
  if (msg.content === "$support") {
    msg.reply("Please use the  If you are requesting to change booking details, please edit your Google Form response.");
  }
  
  if (msg.content === "ARTCvanDM") {      
    msg.channel.type === (`"dm"`) + msg.author.send("hi") 
  }

  if (msg.content === "noobsmp") {
    msg.reply("L SMP is very noob.");
  }
	
})
client.on('ready', () => {
    // Set bot status to: "Playing $help | $support"
    client.user.setActivity("$help | $support")

    // Alternatively, you can set the activity to any of the following:
    // PLAYING, STREAMING, LISTENING, WATCHING
    // For example:
    // client.user.setActivity("TV", {type: "WATCHING"})
})
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'test') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);

		await interaction.reply({ content: 'huh!', components: [row] });

  }
})


client.login(process.env.TOKEN);
