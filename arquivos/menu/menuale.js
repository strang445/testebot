const fs = require("fs")
const chalk = require("chalk")

const menuale = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[🎈 𝗢𝘂𝘁𝗿𝗼𝘀 🎈]
├⪧ ${prefixo}gerarnick [texto]
├⪧ ${prefixo}gpt [perguntar]
├⪧ ${prefixo}gpt2 [perguntar]
├⪧ ${prefixo}ia-img [desejo]
├⪧ ${prefixo}calcular 1+1
├⪧ ${prefixo}qrcode [link]
├⪧ ${prefixo}dono
├⪧ ${prefixo}ping
├⪧ ${prefixo}descobrirmusica [ft/vd]
├⪧ ${prefixo}bug [bug/Erros]
├⪧ ${prefixo}sugestão [sugestão]
├⪧ ${prefixo}metadinha
├⪧ ${prefixo}reiniciar
├⪧ ${prefixo}listonline
├⪧ ${prefixo}pinterest [desejo]
├⪧ ${prefixo}converter [video]
├⪧ ${prefixo}checkativo @
├⪧ ${prefixo}rankinativos
├⪧ ${prefixo}rankinativo
├⪧ ${prefixo}gtts pt [texto]
├⪧ ${prefixo}idiomas-gtts
├⪧ ${prefixo}tabela
╰─────── • 
`
}

exports.menuale = menuale