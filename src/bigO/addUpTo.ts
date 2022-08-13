export const addUpTo = (n: number): number => {
    let total = 0;
    for( let i = 0; i <= n; i++ ) {
        total += i;
    };
    return total;
};

export const addUpTo2 = (n: number): number => {
    return n * (n + 1) / 2
};

export const myAddUpTo = (n: number): number => {
    if (n === 0) {
        return n;
    };

    return n + myAddUpTo(n - 1);
};