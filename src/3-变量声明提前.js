//  变量声明提前

/**
 * 1.
 */

console.log("a" in window);  // window 中是否有a这个属性

// =>

/**
 * 2.
 */

console.log("a" in window);  // window 中是否有a这个属性

console.log(a);

var a = 1;

console.log(a);


/**
 * 3.
 */

if (!("a" in window)) {  // 如果window中没有a
    var a = 1;           // 就声明a，并赋值 1
}

console.log(a);          // ?








/**
 *  4. 作用域，变量声明提前
 */