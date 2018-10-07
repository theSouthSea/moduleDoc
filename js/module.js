$(function () {
    module.inits.forEach(function (item) {
        $.type(item) == "function" && item();
    });
});


// window.addEventListener('load', function () {
//     module.inits.forEach(function (item) {
//         item && item();
//     });
// });


var module = (function (my) {  //  template

    my.inits = my.inits || [];  //需要初始化的方法

    return my;
})(module || {});



var module = (function (my) {  //  module

    my.inits = my.inits || [];


    // private temp   私有变量
    var temp = 12;


    //private function  私有方法
    function demo() {

    }


    // inits
    my.inits.push(function () {

    });


    //public method
    my.method = function () {

    };

    return my;
})(module || {});



var module = (function (my) {  //  template

    my.inits = my.inits || [];  //需要初始化的方法

    my.inits.push(function () {
        console.log(1);
    });

    return my;
})(module || {});


var module = (function (my) {  //  template

    my.inits = my.inits || [];  //需要初始化的方法

    my.inits.push(function () {
        console.log(2);
    });

    return my;
})(module || {});



