let handler = async m => m.reply(`
╭─「 DONATE • 🥳 」
│ • wa.me//+919048410619
│ • YouTube = https://youtube.com/c/MrRavanan
│ • YOUTUBE 2nd = https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
╰────
╭─「  ബോട്ട് ഇൽ error ഉണ്ടേൽ അറിയിക്കുക 」
│ > wa.me//+919048410619
╰────

സപ്പോർട്ട് മച്ചാന്മാരെ 
*Youtube *:
1.) https://youtube.com/c/MrRavanan
2.) https://youtube.com/channel/UChVky9HwaivYVdQRMCrM9Ig
"🥳🥰"
*If not, it's okay*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
