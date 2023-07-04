const fs = require("fs")
const chalk = require("chalk")

const menupremm = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[👑 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 👑]
├⪧ ${prefixo}ddd [87]
├⪧ ${prefixo}encurtalink [link]
├⪧ ${prefixo}gerarcpf
├⪧ ${prefixo}gerarlink [imagem]
├⪧ ${prefixo}hentai
├⪧ ${prefixo}hentai-neko
├⪧ ${prefixo}listaddd
╰─────── • 
`
}

exports.menupremm = menupremm