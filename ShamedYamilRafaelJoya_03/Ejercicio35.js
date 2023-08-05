function MinMax(Array) {
    let min = Array[0]
    let max = Array[0]

    for (let i = 0; i < Array.length; i++) {
        if (min > Array[i]) {
            min = Array[i]
        }
        if (max < Array[i]) {
            max = Array[i]
        }
    }
    return [min,max]
}
