/* Задание 3.
    Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как
аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.
*/

function getSum(a) {
    return function (b) {
        console.log(b + a)
    }
}

let func = getSum(5);
func(4)