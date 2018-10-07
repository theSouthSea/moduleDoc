// 推导

// 1.分离
function demo() {

    return 1;
}

var module = demo();

// 2.自执行函数

//函数表达式方式
var demo = function () {

}

var module = demo();
// =>
var module = (function () {

})();


// 3.带上参数

var module = (function (my) {

    return my;
})(module || {});

// var module = (function (my) {

//     return my;
// })(module || {});

// var module = (function (my) {

//     return my;
// })(module || {});



// 4. 工作中常用示例：

var obj = (function () {

    var temp = 1;
    var func = function () {
        console.log(temp * temp);
    };

    return {
        do: function () {
            temp++;
            func();
        }
    };
})();


