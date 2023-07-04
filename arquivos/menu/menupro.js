const fs = require("fs")
const chalk = require("chalk")

const menupro = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭──[🌌 𝗟𝗼𝗴𝗼𝘀 𝗧𝗲𝘅𝘁𝗽𝗿𝗼 🌆]
├⪧ ${prefixo}candy [texto]
├⪧ ${prefixo}christmas [texto] 
├⪧ ${prefixo}3dchristmas [texto] 
├⪧ ${prefixo}sparklechristmas [texto]
├⪧ ${prefixo}deepsea [texto] 
├⪧ ${prefixo}scifi [texto] 
├⪧ ${prefixo}rainbow [texto] 
├⪧ ${prefixo}waterpipe [texto] 
├⪧ ${prefixo}spooky [texto] 
├⪧ ${prefixo}pencil [texto] 
├⪧ ${prefixo}circuit [texto] 
├⪧ ${prefixo}discovery [texto] 
├⪧ ${prefixo}metalic [texto] 
├⪧ ${prefixo}fiction [texto] 
├⪧ ${prefixo}demon [texto] 
├⪧ ${prefixo}transformer [texto] 
├⪧ ${prefixo}berry [texto] 
├⪧ ${prefixo}thunder [texto] 
├⪧ ${prefixo}magma [texto] 
├⪧ ${prefixo}3dstone [texto] 
├⪧ ${prefixo}neonlight [texto] 
├⪧ ${prefixo}glitch [texto] 
├⪧ ${prefixo}harrypotter [texto] 
├⪧ ${prefixo}brokenglass [texto] 
├⪧ ${prefixo}papercut [texto] 
├⪧ ${prefixo}watercolor [texto] 
├⪧ ${prefixo}multicolor [texto] 
├⪧ ${prefixo}neondevil [texto] 
├⪧ ${prefixo}underwater [texto] 
├⪧ ${prefixo}graffitibike [texto]
├⪧ ${prefixo}snow [texto] 
├⪧ ${prefixo}cloud [texto] 
├⪧ ${prefixo}honey [texto] 
├⪧ ${prefixo}ice [texto] 
├⪧ ${prefixo}fruitjuice [texto] 
├⪧ ${prefixo}biscuit [texto] 
├⪧ ${prefixo}wood [texto] 
├⪧ ${prefixo}chocolate [texto] 
├⪧ ${prefixo}strawberry [texto] 
├⪧ ${prefixo}matrix [texto] 
├⪧ ${prefixo}blood [texto] 
├⪧ ${prefixo}dropwater [texto] 
├⪧ ${prefixo}toxic [texto] 
├⪧ ${prefixo}lava [texto] 
├⪧ ${prefixo}rock [texto] 
├⪧ ${prefixo}bloodglas [texto] 
├⪧ ${prefixo}hallowen [texto] 
├⪧ ${prefixo}darkgold [texto] 
├⪧ ${prefixo}joker [texto] 
├⪧ ${prefixo}wicker [texto]
├⪧ ${prefixo}firework [texto] 
├⪧ ${prefixo}skeleton [texto] 
├⪧ ${prefixo}blackpink [texto] 
├⪧ ${prefixo}sand [texto]
├⪧ ${prefixo}glue [texto]
├⪧ ${prefixo}1917 [texto]
├⪧ ${prefixo}leaves [texto]
╰─────── • 
`
}

exports.menupro = menupro