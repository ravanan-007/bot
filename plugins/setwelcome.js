let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    else global.DATABASE._data.chats.sWelcome = text
    m.reply('Welcome was set successfully\n@user (Mention)\n@subject (Group Title)')
  } else throw 'Where is the text?'
}
handler.help = ['setwelcome <text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

