/*нахождение минимума среди двух чисел*/
{

    /*

    let x, y, z, min;
    x = parseInt(prompt("Введите первое число"));
    y = parseInt(prompt("Введите второе число"));
    z = parseInt(prompt("Введите третье число"));


    min = x;
    if (y < min){
        min = y;
    } 
    if(z < min){
        min = z;
    }
    alert("min =" +min);
    */
}
{
    /*Вывести нечетные цифра от 0 до 10 */
    // for(let i = 0; i < 10; i++){
    //     if(i % 2 != 0) console.log(i);
    // }

    // for(let i = 0; i < 10; i = i + 2){
    //     console.log(i);
    // }
    
    
}

{
    /* Найти Кол - во нечетных чисел в последовательности. Последовательность чисел ввводится с клавиатуры и заканчивается вводом 0 */
    // let count = 0 , x;
    // x = parseInt(prompt("введите число"));
    // while(x != 0){
    //     if(x % 2 != 0){
    //         count++;
    //     }
    //     x = parseInt(prompt("введите число"))
    // }
    // alert("кол- во нечетных чисел" +count);
}
{
    /* найти кол- во нечетных чисел в натуральном числе */
    let count = 0, d, x;
    x = parseInt(prompt("введите натуральное число"));
    while(x != 0){
        d = x % 10;
        if(d % 2 != 0){
            count++;
        }
        x = Math.floor(x / 10);
    }
    alert("кол- во нечетных чисел = " +count);
}