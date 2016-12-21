var stationery = {
    "pencil": 0,
    "eraser": 0,
    "core": 0
};



/*
clickしたら下の関数を実行
idを引数に取りたい。取得方法？
idと変数名をイコールにすれば，足し算はでき，どう返せばいいのか

var plus = function(item) {
  stationery.item++;
  $(#item).text(stationery.item);
};
*/


$(document).ready(function() {



    /*for (var i = 0;
        '.change_button'
        が何個あるか; ++i) {

        'change_button' [i];

    }*/


    $(".change_button").each(function(index) {

        if (index % 2) return;

        // 物の名前
        var name = this.dataset.name;


        var id = "#" + name + "_a";

        // ローカルストレージの数値
        var localStorageValue = localStorage.getItem(name) * 1;

        //
        stationery[name] = localStorageValue;

        $(id).text(localStorageValue);

    });

    // $("#pencil_a").text(item.pencil); が繰り返し
    // pencil の集団がクリックされたあと，$("#pencil_a").text(item.pencil); 実行
    // pencilに上位を設けて，その下位でプラスマイナスの処理，それらが終わった跡に表示

    $(".change_button").click(function() {

        var name = this.dataset.name;

        stationery[name] = localStorage.getItem(name) | 0;

        var num = this.value | 0;

        stationery[name] += num;

        $("#" + name + "_a").text(stationery[name]);

        localStorage.setItem(name, stationery[name]);


        /*
          var str = '123';
          parseInt(str, 10); // 第二引数 10進数
          文字列を整数化

          str | 0; //これも上と同じ

          str * 1;
        */


        // console.log(this.id, stationery.pencil);

    });

    /*

    $("#pencil_p").click(function() {
        //stationery.pencil++;
        $("#pencil_a").text(stationery.pencil);

        localStorage.setItem('pencil', stationery.pencil);
    });
    $("#pencil_d").click(function() {
        stationery.pencil--;
        if (stationery.pencil > 0)
            $("#pencil_a").text(stationery.pencil);
        else {
            stationery.pencil = 0;
            $("#pencil_a").text(stationery.pencil);
        }
    });

    $("#eraser_p").click(function() {
        stationery.eraser++;
        $("#eraser_a").text(stationery.eraser);
    });
    $("#eraser_d").click(function() {
        stationery.eraser--;
        if (stationery.eraser > 0)
            $("#eraser_a").text(stationery.eraser);
        else {
            stationery.eraser = 0;
            $("#eraser_a").text(stationery.eraser);
        }
    });

    $("#core_p").click(function() {
        stationery.core++;
        $("#core_a").text(stationery.core);
    });
    $("#core_d").click(function() {
        stationery.core--;
        if (stationery.core > 0)
            $("#core_a").text(stationery.core);
        else {
            stationery.core = 0;
            $("#core_a").text(stationery.core);
        }
    });
    */
});
