const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(interaction) {
        const Guild = interaction.client.guilds.cache.get("GuildID");
        const Member = Guild.members.cache.get("UserID");
        if (Member.voice.channel) {
            console.log("User is connected");
        }
        await interaction.reply(`${interaction.user.voice}`);
    },
};