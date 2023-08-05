function impar (num) {
    let result = 0;
    let i = 1;
    
    while (i <= num) {
        if (i % 2 != 0) {
            result += i;
        }
        i++;
    }
    return result;
}