var stationery = {
    "pencil": 0,
    "eraser": 0,
    "core": 0
};

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
        stationery[name] = localStorage.getItem(name) * 1;

        $(id).text(stationery[name]);

    });


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

});
