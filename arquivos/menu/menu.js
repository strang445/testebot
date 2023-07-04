const fs = require("fs")
const chalk = require("chalk")

const menu = (prefixo, nomebot, nome, tempo, isPremium, hora1, date, comando, readmore ) => {

return `╭───「 ${nomebot} 」
├⪧ 𝗢𝗹𝗮́: ${nome} 
├⪧ ${tempo}
├⪧ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺: ${isPremium? 'Sim👑' : 'Não'}
├⪧ 𝗛𝗼𝗿𝗮: ${hora1}
├⪧ 𝗗𝗮𝘁𝗮: ${date}
├⪧ 𝗖𝗼𝗺𝗮𝗻𝗱𝗼: ${comando}
╰───────── •
${readmore}
╭───[⚡ 𝗠𝗲𝗻𝘂𝘀 ⚡]
├⪧ ${prefixo}menudownload
├⪧ ${prefixo}menualeatorio
├⪧ ${prefixo}menuadm
├⪧ ${prefixo}menusticker
├⪧ ${prefixo}menubrincadeira
├⪧ ${prefixo}edição_de_audio
├⪧ ${prefixo}menutextpro
├⪧ ${prefixo}menuimagem
├⪧ ${prefixo}menupokemon
├⪧ ${prefixo}menupremium
├⪧ ${prefixo}menudono
╰─────── • 

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

╭───[🗿 𝗔𝗱𝗺𝗶𝗻𝘀 🍷]
├⪧ ${prefixo}bemvindo 1/0
├⪧ ${prefixo}modobrincadeira 1/0
├⪧ ${prefixo}antilink 1/0
├⪧ ${prefixo}anticontato 1/0
├⪧ ${prefixo}anticatalogo 1/0
├⪧ ${prefixo}antiloc 1/0
├⪧ ${prefixo}antiaudio 1/0
├⪧ ${prefixo}antivideo 1/0
├⪧ ${prefixo}antiimg 1/0
├⪧ ${prefixo}antidocumento 1/0
├⪧ ${prefixo}antinotas 1/0
├⪧ ${prefixo}antisticker 1/0
├⪧ ${prefixo}autosticker 1/0
├⪧ ${prefixo}x9visu 1/0
├⪧ ${prefixo}listanegra [558788...]
├⪧ ${prefixo}tirardalista [558788...]
├⪧ ${prefixo}legendabv
├⪧ ${prefixo}fundobemvindo
├⪧ ${prefixo}infobemvindo
├⪧ ${prefixo}status
├⪧ ${prefixo}hidetag [texto]
├⪧ ${prefixo}marcar
├⪧ ${prefixo}marcarwa
├⪧ ${prefixo}promover @
├⪧ ${prefixo}rebaixar @
├⪧ ${prefixo}linkgp
├⪧ ${prefixo}linkgp2
├⪧ ${prefixo}ban @
├⪧ ${prefixo}add @
├⪧ ${prefixo}listonline
├⪧ ${prefixo}nomegp [nome]
├⪧ ${prefixo}descgp [descrição]
├⪧ ${prefixo}fotogp [marcarft]
├⪧ ${prefixo}listabr
├⪧ ${prefixo}listafake
├⪧ ${prefixo}listaadmins
├⪧ ${prefixo}infogp 
├⪧ ${prefixo}novolink
├⪧ ${prefixo}grupo a/f
├⪧ ${prefixo}abrirgp 1 hora
├⪧ ${prefixo}fechargp 1 hora
├⪧ ${prefixo}apagar
├⪧ ${prefixo}mute @
├⪧ ${prefixo}unmute @
├⪧ ${prefixo}limpar
├⪧ ${prefixo}destrava
├⪧ ${prefixo}destrava2
╰─────── • 

╭───[💟 𝗦𝘁𝗶𝗰𝗸𝗲𝗿𝘀 🥳]
├⪧ ${prefixo}sticker [marcar]
├⪧ ${prefixo}f [marcar]
├⪧ ${prefixo}qc [texto]
├⪧ ${prefixo}ttp [texto]
├⪧ ${prefixo}toimg [marcar]
├⪧ ${prefixo}togif [marcar]
├⪧ ${prefixo}attp1 [texto]
├⪧ ${prefixo}attp2 [texto]	
├⪧ ${prefixo}attp3 [texto]
├⪧ ${prefixo}attp4 [texto]
├⪧ ${prefixo}attp5 [texto]
├⪧ ${prefixo}attp6 [texto]
├⪧ ${prefixo}roubar 
├⪧ ${prefixo}emoji [😍]
├⪧ ${prefixo}emoji 🙃/whatsapp
├⪧ ${prefixo}emoji 😒/apple
├⪧ ${prefixo}emoji 😌/google
├⪧ ${prefixo}emoji 🙄/samsung
├⪧ ${prefixo}emoji 🥶/twitter
├⪧ ${prefixo}emoji 😒/fecebook
├⪧ ${prefixo}emoji 😁/joypixels
├⪧ ${prefixo}emoji 🥰/openmoji
├⪧ ${prefixo}emoji 😝/emojidex
├⪧ ${prefixo}emoji 🤗/lg
├⪧ ${prefixo}emoji 😇/htc
╰─────── • 

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

╭──[🏜️ 𝗜𝗺𝗮𝗴𝗲𝗻𝘀 🏞️]
├⪧ ${prefixo}neko2
├⪧ ${prefixo}zoro
├⪧ ${prefixo}luffy
├⪧ ${prefixo}sanji
├⪧ ${prefixo}ussop
├⪧ ${prefixo}nami
├⪧ ${prefixo}copper
├⪧ ${prefixo}naruto
├⪧ ${prefixo}minato
├⪧ ${prefixo}sasuke
├⪧ ${prefixo}sakura
├⪧ ${prefixo}boruto
├⪧ ${prefixo}sarada
├⪧ ${prefixo}mitsuki
├⪧ ${prefixo}orochimaru
├⪧ ${prefixo}tsunade
├⪧ ${prefixo}kakashi
├⪧ ${prefixo}killua
├⪧ ${prefixo}gon
├⪧ ${prefixo}rimuru
├⪧ ${prefixo}sagiri
├⪧ ${prefixo}natsu
├⪧ ${prefixo}tanjirou
├⪧ ${prefixo}nezuko
├⪧ ${prefixo}senku
├⪧ ${prefixo}waifu
├⪧ ${prefixo}neko
├⪧ ${prefixo}megumin
├⪧ ${prefixo}awoo
├⪧ ${prefixo}shinobu
├⪧ ${prefixo}bully
├⪧ ${prefixo}cuddle
├⪧ ${prefixo}cry
├⪧ ${prefixo}hug
├⪧ ${prefixo}kiss
├⪧ ${prefixo}pat
├⪧ ${prefixo}lick
├⪧ ${prefixo}smug
├⪧ ${prefixo}bonk
├⪧ ${prefixo}yeet
├⪧ ${prefixo}blush
├⪧ ${prefixo}smile
├⪧ ${prefixo}wave
├⪧ ${prefixo}highfive
├⪧ ${prefixo}handhold
├⪧ ${prefixo}nom
├⪧ ${prefixo}bite
├⪧ ${prefixo}glomp
├⪧ ${prefixo}slap
├⪧ ${prefixo}kill
├⪧ ${prefixo}kick
├⪧ ${prefixo}happy
├⪧ ${prefixo}wink
├⪧ ${prefixo}poke
├⪧ ${prefixo}dance
├⪧ ${prefixo}cringe
╰─────── • 

╭──[👾 𝗣𝗼𝗸𝗲́𝗺𝗼𝗻 👾]
├⪧ ${prefixo}pokemon [texto]
├⪧ ${prefixo}nidorino 
├⪧ ${prefixo}nidoking 
├⪧ ${prefixo}clefairy 
├⪧ ${prefixo}vulpix 
├⪧ ${prefixo}pikachu 
├⪧ ${prefixo}bulbasaur 
├⪧ ${prefixo}raticate 
├⪧ ${prefixo}pidgeot 
├⪧ ${prefixo}pidgeotto 
├⪧ ${prefixo}beedrill 
├⪧ ${prefixo}pidgey 
├⪧ ${prefixo}weedle 
├⪧ ${prefixo}caterpie 
├⪧ ${prefixo}blastoise 
├⪧ ${prefixo}wartortle 
├⪧ ${prefixo}sandshrew 
├⪧ ${prefixo}raichu 
├⪧ ${prefixo}arbok 
├⪧ ${prefixo}ekans 
├⪧ ${prefixo}fearow 
├⪧ ${prefixo}spearow 
├⪧ ${prefixo}rattata 
├⪧ ${prefixo}charmander 
├⪧ ${prefixo}charmeleon 
├⪧ ${prefixo}charizard 
├⪧ ${prefixo}ivysaur 
├⪧ ${prefixo}squirtle 
╰─────── • 

╭──[👑 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 👑]
├⪧ ${prefixo}ddd [87]
├⪧ ${prefixo}encurtalink [link]
├⪧ ${prefixo}gerarcpf
├⪧ ${prefixo}gerarlink [imagem]
├⪧ ${prefixo}hentai
├⪧ ${prefixo}hentai-neko
├⪧ ${prefixo}listaddd
╰─────── • 

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

exports.menu = menu

