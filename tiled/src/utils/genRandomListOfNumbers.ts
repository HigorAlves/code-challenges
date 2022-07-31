// @ts-ignore
const fillFn = (n: number) => Math.random(1 / n);

export function genRandomListOfNumbers(seed: number) {
    const list = new Array(10);
    return list.fill(fillFn, 0, 9).map((n) => n(seed));
}