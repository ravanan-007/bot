let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Made with javascript via NodeJs, Ffmpeg, and ImageMagick

Rec: RANJITH
YOUTUBE : https://youtube.com/c/MrRavanan
YOUTUBE SECOND CHANNEL : https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
GIT HUB : https://github.com/mrravanan

*Social Media :*
എന്റെ ഫസ്റ്റ് ചാനൽ എപ്പോൾ വേണമെമ്പങ്കിലും ഡിലീറ്റ് ആവും 😔 സെക്കന്റ്‌ ചാനൽ ഇൽ എല്ലാവരും സപ്പോർട്ട് ചെയ്യുക 
second channel : https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
Instagram: __mr_ravanan
➥ YouTube:
https://youtube.com/c/MrRavanan

*Thanks To :*
thanks for supporting

╠═〘 DONATE 〙 ═
╠➥ wa.me//+919048410619
║>Request? wa.me//+919048410619
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

