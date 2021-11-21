const getAlphabet = () => {
    const arr = [];
    for (let i = 65; i <= 89; i++) {
        arr.push(String.fromCodePoint(i));
    }
    return arr;
}

export const alphabet = getAlphabet();