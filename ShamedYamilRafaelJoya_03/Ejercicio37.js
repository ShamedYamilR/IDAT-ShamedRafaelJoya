function mcd (num1, num2) {
    let x;
    while (num2 !== 0) {
        x = num2;
        num2 = num1 % num2;
        num1 = x;
    }
    return num1;
}