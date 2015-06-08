/*
*   > MITHYBOARD SCRIPT
*   > VERSION: 1.3.0
*   > BUILD: 0607-04
*   > ALTERAÇÕES:
*       > Criação do pseudo-DB.
*       > Função que auto-escreve os badges e a quantidade.
*       > Correção no hover animation das badges.
*       > Mais Badges adicionadas e correção NA IDENTAÇÃO DO FLIKE!
*       > Novo sistema de criação de badges.
*       > Mitadores agora são arrays de um objeto.
*
*   > WARNINGS:
*       > NÃO ALTERAR O MÉTODO "writeBadges(myth)", ELE É O CORE QUE FAZ A PORA TODA.
*       > NÃO ALTERAR A PRIMEIRA POSIÇÃO DOS ARRAYS (0), A MENOS QUE O ID DO MITADOR SEJA ALTERADO.
*       > CLARO, NÃO FUÇE.
*          
*   > NOMENCLATURAS:
*       > VARIÁVEIS DE BADGES COMUNS: NOMES SUGESTIVOS COM NO MÁXIMO DUAS PALAVRAS (EX: doisPotes).
*       > VARIÁVEIS DE BADGES TIPO TIER: UMA PALAVRA SEGUIDA DE "myth" (EX: mythLegacy).
*       > VARIÁVEIS DE BADGES TIPO CREST: NOME DO MITADOR SEGUIDO DE "c" (EX: cFlicky).
*       > NOVO SISTEMA DE CRIAÇÃO DE BADGES! CRIAR VAR CHAMANDO A FUNÇÃO createBadge(title,imgName).
*
*   > CRIAÇÃO DE BADGES:
*       > var nomeDaBadge = createBadge('Título da Badge', 'nome do arquivo da imagem sem extensão');
*       > Exemplo: var doisPotes = createBadge('Luana exclusive \'Doooois Pooootes\' Badge', 'pots');
*       > Caso a badge não tenha imagem, é só ignorar o segundo argumento, a imagem será automaticamente adicionada.
*       > Exemplo: var pauHd = createBadge('Aragão exclusive \'Pau em HD\' Badge');
*/

/*
function writeBadges(myth){
/*
*   Descrição: Função que escreve no #document as imagens 
*   das badges e e a quantidade delas (a quantidade é cal-
*   culada a partir do array.length e não dos filhos da tag).
*   Args: 1. O array do mitador.
*
    for (var i = 1; i < myth.length; i++) {
        document.getElementById(myth.id).innerHTML += " " + myth[i] + " ";
    }
    document.getElementById(myth[0] + "1").innerHTML += (myth.length - 1); 
}
*/
function writeBadges(myth){
/*
*   Descrição: Função que escreve no #document as imagens 
*   das badges e e a quantidade delas (a quantidade é cal-
*   culada a partir do array.length e não dos filhos da tag).
*   Args: 1. O array do mitador.
*/
    for (var i in myth.badges) {
        document.getElementById(myth.tagId).innerHTML += " " + myth.badges[i] + " ";
    }
    document.getElementById(myth.tagId1).innerHTML += myth.badges.length; 
}


function indexMyth(osMitos){
/*
*   Descrição: Função que simplifica a escrita das badges
*   no #document.
*   Args: 1. Os Mitadores (object). **apesar de não ter um 
*   outro argumento válido**
*/

    for (var i in osMitos){

        document.writeln(createTable(osMitos[i]));
    }

    for (var x in osMitos){
        writeBadges(osMitos[x]);
    }
}

indexMyth(Myth);

