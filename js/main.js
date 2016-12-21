var stationery = { "pencil" : 0, "eraser" : 0, "core" : 0 };

/*

clickしたら下の関数を実行
idを引数に取りたい。取得方法？
idと変数名をイコールにすれば，足し算はでき，どう返せばいいのか

var plus = function(item) {
  stationery.item++;
  $(#item).text(stationery.item);
};

*/


$(document).ready( function() {

  // $("#pencil_a").text(item.pencil); が繰り返し
  // pencil の集団がクリックされたあと，$("#pencil_a").text(item.pencil); 実行
  // pencilに上位を設けて，その下位でプラスマイナスの処理，それらが終わった跡に表示

  $("#pencil_p").click(function(){
    stationery.pencil++;
    $("#pencil_a").text(stationery.pencil);
  });
  $("#pencil_d").click(function(){
    stationery.pencil--;
    if(stationery.pencil > 0)
      $("#pencil_a").text(stationery.pencil);
    else{
      stationery.pencil = 0;
      $("#pencil_a").text(stationery.pencil);
    }
  });

  $("#eraser_p").click(function(){
    stationery.eraser++;
    $("#eraser_a").text(stationery.eraser);
  });
  $("#eraser_d").click(function(){
    stationery.eraser--;
    if(stationery.eraser > 0)
      $("#eraser_a").text(stationery.eraser);
    else{
      stationery.eraser = 0;
      $("#eraser_a").text(stationery.eraser);
    }
  });

  $("#core_p").click(function(){
    stationery.core++;
    $("#core_a").text(stationery.core);
  });
  $("#core_d").click(function(){
    stationery.core--;
    if(stationery.core > 0)
      $("#core_a").text(stationery.core);
    else{
      stationery.core = 0;
      $("#core_a").text(stationery.core);
    }
  });
});
