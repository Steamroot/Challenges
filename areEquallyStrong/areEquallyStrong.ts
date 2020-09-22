function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    
    let validity: number = 0;

    if (yourLeft === friendsLeft || yourLeft == friendsRight) {
        validity += 1;
    }

    if (yourRight === friendsRight || yourRight === friendsLeft) {
        validity += 1;
    }

    if (validity == 2) {
        return true
    }

    return false;
    
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
