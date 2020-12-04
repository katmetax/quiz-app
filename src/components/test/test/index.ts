
export const myFirstFunc = (arg) => {
    const foo = 'value';
    const bar = 'anotherValue';

    const constructedURL = `https://example.com/?q=${foo}&s=${bar}&a=${arg}`;

    return new Promise((resolve, rejected) => {
        return resolve
    });
};

export const mySecondFunc = (arg) => {
    const foo = arg;

    return foo.map((item) => ({
        name: item
    }));
};
