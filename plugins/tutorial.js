let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *~https://youtube.com/c/MrRavanan*

1) ആൻഡ്രോയ്ഡ് ഫോൺ വേണം 
2) ഒരു വാട്സ്ആപ്പ് നമ്പർ ഉം 
3) termux ആപ്പ് ഇൻസ്റ്റാൾ ചെയ്യണം, അതെങ്ങനെ ഉപയോഗികയാന്നും 
4) അതിനായി ഈ വീഡിയോ കാണുക
📍PLAYLIST 👇

FAKE NUMBER TUTORIALS : https://youtube.com/playlist?list=PLX...​

INSTAGRAM BOT TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

TERMUX TUTORIALS : 
https://youtube.com/playlist?list=PLX...​

WHAT'S APP BOT TUTORIALS : https://youtu.be/swWgfse4viw
_Can you see the tutorial on_
*Youtube:*
https://youtube.com/c/MrRavanan
https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

