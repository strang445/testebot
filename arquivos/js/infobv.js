const infobemvindo = (prefixo) => {
return `

Olá, este comando é para informar, como você deve ativar o bem vindo, e lembrando, esse bemvindo, contém uma legenda diferente, a cada grupo que for colocado. 

Pará ativar o comando, é nescessario ativar, com:

${prefixo}bemvindo 1 

Pará Desativar :

${prefixo}bemvindo 0


Pronto. 

Pará criar a legenda você deve digitar este comando :

${prefixo}legendabv e colocar a legenda que você quer que o bot envie, após alguém entrar no grupo, e tem essas coisas. 

#nomedogp#

#numerobot#

#numerodele#

#prefixo#

#descrição#




Se eu fazer uma legenda assim, por exemplo: 

${prefixo}legendabv Olá seja bem vindo(a) ao grupo : #numerodele# 

Grupo: #nomedogp#

Prefixo do bot : #prefixo#

Leia as regras : 

#descrição#


E também tem esse:

${prefixo}legendasaiu e digita oq quer, por exemplo, Adeus.

mas não recomendo colocar legenda, é bom que só vem o bemvindo kkkk, vai aparecer que a legenda N foi definida kkkk


Pronto, se eu envio assim, no grupo que estou, toda vez que alguém entrar, sera enviado isso, o que você definiu ali 

#numerodele# = vai aparecer o numero dele, com essa definição. 

#nomedogp# = vai aparecer o nome do grupo com essa definição. 

#prefixo# = vai aparecer qual o símbolo que você está utilizando no bot, pra fazer ele funcionar.

#descrição# = vai aparecer a descrição do grupo todo. 



Pra trocar o fundo da imagem do bemvindo, é só mandar uma foto no WhatsApp, retangular e marcar ela com o comando :

${prefixo}fundobemvindo 

Ou se quer trocar o fundo do saiu, é só marcar uma imagem retangular com o comando ${prefixo}fundosaiu 

Se você não intendeu, se lasque!


----------------------------
CRÉDITOS DO BEM VINDO : 

Brizas-Bot = Ian.
Assinado: Aleatory Bot. 

-----------------------------
`
}

exports.infobemvindo = infobemvindo