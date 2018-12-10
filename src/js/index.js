function makeCounter(initialCount, increment) {
    var initial = +initialCount;

    console.log('initial: ', initial);

    var count = isNaN(initial) ? 0: initial;

    console.log('count: ', count);
    count = +prompt("Введите начальное число", 0);
    increment = +prompt("Введите шаг", 0);
    return function() {
        count = count + increment ;
        console.log('count: ', count);
    }
}