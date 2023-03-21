var agora = new Date()
var diasem = agora.getDay()
console.log(diasem)

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        conseole.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        conseole.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia inválido!')
    
    
}
