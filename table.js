
var mit={};



function createTable(mito) {    
    

    return ('<table  class="tg" style="table-layout: margin-bottom: 10px; fixed; width: 100%"> \
  <colgroup>\
  <col style="width: 50px"><col style="width: 150px">\
</colgroup>\
<tr>\
  <!-- CREST ICON -->\
  <th class="crest">\
    <img class="crestpic" title="Este Mitador ainda não possui Crest própria" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/none.png">\
  </th>\
  <!-- NAME -->\
  <th align="left" class="name" colspan="2">'+ mito.nome +'</th>  <th align="left" class="tiername"></th> <!-- Espacinho -->\
  <!-- TIER -->\
  <th align="left" class="tiername">Tier: <strong>' + mito.tier + '</strong></th>\
  <th align="right" class="tiericon"><img class="tier" title="Mitador Unicorn: Raros porém participativos" src="http://os-mitadores.lucasflicky.com/files/theme/BADGES/uni.png"></th>\
</tr>\
<tr>\
  <!-- PROFILE PIC -->\
  <td align="center" class="profilepic" colspan="2" rowspan="5"><a target="_blank" href="https://www.facebook.com/' + mito.faceId + '"><img class="profile" src="http://graph.facebook.com/' + mito.faceId + '/picture?width=150&height=150"></a></td><tr><td HEIGHT="1px" colspan="2" ></td></tr>\
  <td class="tg-e3zv"> Badges\
  </td>\
  <td class="tg-031e"></td>\
  <td class="since" align="right"  colspan="3" >Mitando since  <strong>' + mito.ano + '</strong></td>\
</tr>\
<tr>\
  <!-- BADGES -->\
  <td class="badges" id="' + mito.tagId + '" colspan="4">\
  </td>\
</tr>\
<tr><td class="badges"><td class="badges"><td colspan="2" align="right" class="badges2">  <i>Badges Coletadas:</i> <b id="' + mito.tagId1 + '"></b> </td></tr>\
</table>');
    
}

function indexMyth(osMitos){
/*
*   Descrição: Função que simplifica a escrita das badges
*   no #document.
*   Args: 1. Os Mitadores (object). **apesar de não ter um 
*   outro argumento válido**
*/
    for (var i in osMitos){

        document.write(createTable(osMitos[i]));
    }
}

/*
for (var i in Myth){
document.write(createTable(Myth[i],'B',mit[i][1],'D')); 
}
      
 */  
indexMyth(Myth);

