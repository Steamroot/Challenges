function allLongestStrings(inputArray: string[]): string[] {

    let longestWord = 0;
    const longestItems = [];


    inputArray.forEach((word: string) => {
        longestWord = longestWord < word.length ? word.length : longestWord;
    });

    inputArray.forEach((word: string) => {
        if(word.length === longestWord) {
            longestItems.push(word);
        }
    });

    return longestItems;

}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));