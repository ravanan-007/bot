let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
CHANNEL PLAYLIST:


*YouTube:*
_~mr.ravanan_

📍PLAYLIST 👇

FAKE NUMBER TUTORIALS : https://youtube.com/playlist?list=PLX...​

INSTAGRAM BOT TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

TERMUX TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

WHAT'S APP BOT TUTORIALS : https://youtu.be/swWgfse4viw​

`.trim(), m)
}
handler.help = ['murothal']
handler.tags = ['quotes']
handler.command = /^(murothal)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

