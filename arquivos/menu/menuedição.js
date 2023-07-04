const fs = require("fs")
const chalk = require("chalk")

const menuedição = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[🎵 𝗘𝗱𝗶𝗰̧𝗮̃𝗼 𝗱𝗲 𝗔́𝘂𝗱𝗶𝗼𝘀 🎶]
├⪧ ${prefixo}reverse [áudio]
├⪧ ${prefixo}fat [áudio]
├⪧ ${prefixo}deep [áudio]
├⪧ ${prefixo}esquilo [áudio]
├⪧ ${prefixo}estourado [áudio]
├⪧ ${prefixo}estourado2 [áudio]
├⪧ ${prefixo}videolento [áudio]
├⪧ ${prefixo}videorapido [áudio]
├⪧ ${prefixo}videolento [áudio]
├⪧ ${prefixo}grave [áudio]
├⪧ ${prefixo}grave2 [áudio]
├⪧ ${prefixo}vozmenino [áudio]
├⪧ ${prefixo}bass [áudio]
├⪧ ${prefixo}bass2 [áudio] 
├⪧ ${prefixo}bass3 [áudio]
├⪧ ${prefixo}estourar [áudio]
├⪧ ${prefixo}audiorapido [áudio]
├⪧ ${prefixo}audiolento [áudio]
├⪧ ${prefixo}chapolin [texto]
├⪧ ${prefixo}faustao [texto]
╰─────── • 
`
}

exports.menuedição = menuedição