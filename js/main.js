var item = { "pencil" : 0, "elacer" : 0, "core" : 0 };

$(document).ready( function() {

  // $("#pencil_a").text(item.pencil); が繰り返し
  // pencil の集団がクリックされたあと，$("#pencil_a").text(item.pencil); 実行
  // pencilに上位を設けて，その下位でプラスマイナスの処理，それらが終わった跡に表示

  $("#pencil_p").click(function(){
    item.pencil++;
    $("#pencil_a").text(item.pencil);
  });
  $("#pencil_d").click(function(){
    item.pencil--;
    if(item.pencil > 0)
      $("#pencil_a").text(item.pencil);
    else{
      item.pencil = 0;
      $("#pencil_a").text(item.pencil);
    }
  });
});
