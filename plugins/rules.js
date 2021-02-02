let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Terms and Conditions of Bot *US*
1. The text and your WhatsApp username will be stored on the server as long as the bot is active
2. The data will be deleted when the bot is offline
3. We do not store images, videos, files, audios and documents that you like
     ➥ YouTube: https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
6. Whatever you order on this bot, WE WILL NOT BE RESPONSIBLE!

Thanks !
2021©__mr_ravanan
`.trim(), m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

