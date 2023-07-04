const fs = require("fs")
const chalk = require("chalk")

const menubrincadeira = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[💫 𝗕𝗿𝗶𝗻𝗰𝗮𝗱𝗲𝗶𝗿𝗮𝘀 ✨]
├⪧ ${prefixo}roletar
├⪧ ${prefixo}anagrama
├⪧ ${prefixo}eununca
├⪧ ${prefixo}batalhaz
├⪧ ${prefixo}gado
├⪧ ${prefixo}gada
├⪧ ${prefixo}gostoso
├⪧ ${prefixo}gostosa
├⪧ ${prefixo}nazista
├⪧ ${prefixo}beijo @
├⪧ ${prefixo}tapa @
├⪧ ${prefixo}chutar @
├⪧ ${prefixo}dogolpe @
├⪧ ${prefixo}rankgado
├⪧ ${prefixo}rankgay
├⪧ ${prefixo}rankgostosos
├⪧ ${prefixo}rankgostosas
├⪧ ${prefixo}ranknazista
├⪧ ${prefixo}rankotakus
├⪧ ${prefixo}rankpau
├⪧ ${prefixo}roleta-russa [texto]
├⪧ ${prefixo}sorteio [texto]
├⪧ ${prefixo}sorteionumeros [texto]
├⪧ ${prefixo}correio [+55 87../text]
╰─────── • 
`
}

exports.menubrincadeira = menubrincadeira