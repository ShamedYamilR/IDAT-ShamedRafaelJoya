function sumaPares (num) {
    let result = 0
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            result += i
        }
    }
    return result;
}
