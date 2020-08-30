function alphabeticShift(inputString: string): string {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let word = inputString.split('');

    for(let i = 0; i < word.length; i++) {
        let index = 0;

        if(word[i] !== 'z') {
            index = alphabet.indexOf(word[i]) + 1;
        }
        word[i] = alphabet[index];
    }

    return word.join('');
}

console.log(alphabeticShift('crazy'));