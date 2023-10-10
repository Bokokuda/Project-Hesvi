require('dotenv').config();
const { Client, IntentsBitField, EmbedBuilder } = require('discord.js');

const client = new Client({
    intents:[
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ]
});

client.on('ready', (c) => {
    console.log(`${c.user.username} is online.`);
});

client.on('messageCreate', (msg) => {
    if (msg.content === 'Revy' || msg.content == 'Yor') {
        msg.reply('MY QUEEN!')
    }
});

client.on('interactionCreate', (interaction)  => {
    if(!interaction.isChatInputCommand()) return;

    if (interaction.commandName === "hey"){
        interaction.reply("howdy");
    }

    if (interaction.commandName === "add"){
        const num1 = interaction.options.get('first-number').value;
        const num2 = interaction.options.get('second-number').value;
        
        interaction.reply(`The sum is ${num1 + num2}`);
    }

    if (interaction.commandName === "embed"){
        const embed = new EmbedBuilder()
        .setTitle("Embed Title")
        .setDescription('This is an embed desc')
        .setColor('Random')
        .addFields({ name: "Field title", value: "Some random value", inline: true},  {name: "2nd Field title", value: "Some random value", inline: true});

        interaction.reply({ embeds: [embed] });
    }

});


client.login(process.env.TOKEN);