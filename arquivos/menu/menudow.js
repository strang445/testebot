const fs = require("fs")
const chalk = require("chalk")

const menudow = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[📀 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝘀 💿]
├⪧ ${prefixo}playaudio [nome]
├⪧ ${prefixo}playvideo [nome]
├⪧ ${prefixo}playmix [cantor]
├⪧ ${prefixo}ytmp3 [linkytb]
├⪧ ${prefixo}ytmp4 [linkytb]
├⪧ ${prefixo}ytdoc [linkytb]
├⪧ ${prefixo}tiktok_video [link]
├⪧ ${prefixo}tiktok_audio [link]
├⪧ ${prefixo}instagram_video [link]
├⪧ ${prefixo}instagram_audio [link]
├⪧ ${prefixo}facebook_video [link]
├⪧ ${prefixo}facebook_audio [link]
├⪧ ${prefixo}twitter_video [link]
├⪧ ${prefixo}twitter_audio [link]
├⪧ ${prefixo}Mediafire {link}
╰─────── • 
`
}

exports.menudow = menudow