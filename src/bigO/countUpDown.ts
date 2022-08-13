const {log} = console;
export const countUpDown = (n: number): void => {
    log('Going up!');
    for (let i = 0; i < n; i++) {
        log(i);
    };
    log('Going Down!');
    for (let j = n; j > 0; j--) {
        log(j);
    };
};