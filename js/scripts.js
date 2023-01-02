

function genKey (length, characters){
    let key = ''
    for (let i = 0; i < length; i++){
        let genNum = Math.floor(Math.random() * (characters.length));
        key += characters[genNum]
    }
    return key
}

console.log(genKey(16,'abcdefghijklmnopqrstuvwxyz0123456789'))