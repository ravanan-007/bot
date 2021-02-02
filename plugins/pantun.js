let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`“${pickRandom(global.pantun)}”`, m)
}
handler.help = ['pantun']
handler.tags = ['quotes']
handler.command = /^(pantun)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.pantun = [
📍PLAYLIST 👇

FAKE NUMBER TUTORIALS : https://youtube.com/playlist?list=PLX...​

INSTAGRAM BOT TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

TERMUX TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

WHAT'S APP BOT TUTORIALS : https://youtu.be/swWgfse4viw​

]
