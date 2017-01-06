function add() {
    var div_element = document.createElement("div");
    div_element.innerHTML = '<div class="stationery"><img src="./material/noimage.png" height="100px" width="100px"><h2>未タイトル</h2><p id="name_a">no data</p><input type="button" data-name="name" class="change_button" value="+1"><input type="button" data-name="name" class="change_button" value="-1"><input type="button" data-name="name" class="change_button" value="C"></div>';
    var parent_object = document.getElementById("add_stationary");
    parent_object.appendChild(div_element);
}

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

        console.log("stationery[name] : " + stationery[name]);

        var num = this.value | 0;

        console.log("num : " + num);

        if (num === 0) {
            if (window.confirm("値が消去されます。\nよろしいですか？")) {
                stationery[name] = 0;
            } else {
                window.alert("中断しました。");
            }
        } else
            stationery[name] += num;

        console.log("new s[n] : " + stationery[name]);

        if (stationery[name] <= 0)
            stationery[name] = 0;

        console.log("=0 : " + stationery[name]);

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
