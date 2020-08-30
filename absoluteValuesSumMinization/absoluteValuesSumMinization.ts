function absoluteValuesSumMinimization(a: number[]): number {
    let x: number = ((a.length - 1)/2);
    return (a[Math.floor(x)]);
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));