
const { Player } = require("../../helpers/music.js")
const Discord = require("discord.js"), Ytdl = require("discord-ytdl-core")


module.exports = {
  name: 'stop',
  description: 'Stops the music',
  usage: 'stop',
  aliases: [],
  required: [],
  user: [],
  category: __dirname.split("commands\\")[1],
  
  premium: false,
  guildOnly: false,
  async execute(message, args, client, data) {

    const Channel = message.member.voice.channel;

    if (!Channel) return message.error("Please join a voice channel to continue")

    const Queue = await client.queue.get(message.guild.id);

    if (!Queue)
      return message.error("There are no songs in the queue")

    Queue.Songs = [];
    await Queue.Bot.dispatcher.end();

    const Embed = new Discord.MessageEmbed()
      .setColor(client.colors.green)
      .setTitle("Success")
      .setDescription("🎶 Music Has Been Stopped!")
      .setAuthor(message.author.tag, message.author.displayAvatarURL())
      .setFooter(client.user.username, client.user.displayAvatarURL())


    return message.channel.send(Embed).catch(() => message.channel.send("🎶 Music Has Been Stopped!"));

  }
}