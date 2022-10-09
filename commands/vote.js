const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ActionRow} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vote")
        .setDescription("send vote message"),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x62c1cc)
            .setTitle('vote')
            .setDescription('vote for one of the following:')
            .setTimestamp()

        const row = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId("vote_button")
                        .setLabel("vote")
                        .setStyle(ButtonStyle.Success),
                );

        await interaction.reply({ embeds: [embed], components: [row] });
    },
};