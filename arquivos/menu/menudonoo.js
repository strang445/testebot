const fs = require("fs")
const chalk = require("chalk")

const menudonoo = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[💎 𝗗𝗼𝗻𝗼 💎]
├⪧ ${prefixo}seradm
├⪧ ${prefixo}sermenbro
├⪧ ${prefixo}boton 1/0
├⪧ ${prefixo}botoff 1/0
├⪧ ${prefixo}setprefixs
├⪧ ${prefixo}sair 
├⪧ ${prefixo}listagp
├⪧ ${prefixo}entrar [link]
├⪧ ${prefixo}ausente [texto]
├⪧ ${prefixo}voltei
├⪧ ${prefixo}fundobemvindo
├⪧ ${prefixo}fundosaiu
├⪧ ${prefixo}antipv
├⪧ ${prefixo}antiligar
├⪧ ${prefixo}bloquear
├⪧ ${prefixo}desbloquear
├⪧ ${prefixo}serpremium
├⪧ ${prefixo}addpremium @
├⪧ ${prefixo}delpremium @
├⪧ ${prefixo}premiumlist
├⪧ ${prefixo}aluguel
╰─────── • 
`
}

exports.menudonoo = menudonoo