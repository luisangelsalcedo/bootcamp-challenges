// 1) Hello World
function upperCaser(input) {
// SOLUTION GOES HERE
    let result = input.toUpperCase();
    return result;
}
module.exports = upperCaser

// 2) Order functions
function repeat(operation, num) {
    // SOLUTION GOES HERE
    if(num <= 0){
        return;
    }
    return repeat(operation, num-1);
}
module.exports = repeat

// 3) Basic: Map
function doubleAll(numbers) {
// SOLUTION GOES HERE
    return numbers.map(n => n*2);
}
module.exports = doubleAll

// 4) Basic: Filter
function getShortMessages(messages) {
// SOLUTION GOES HERE
    return messages.filter(({message}) => message.length < 50).map(x => x.message); 
}
module.exports = getShortMessages

// 5) Basic: Every Some
function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
        return submittedUsers.every(({id:ids})=>{
            return goodUsers.some(({id:idg})=>{
                return idg === ids;
            });
        });
    };
}                                                                
module.exports = checkUsersValid

// 6) Basic: Reduce
function countWords(inputWords) {
// SOLUTION GOES HERE
    return inputWords.reduce((valorInicial, valorActual)=>{

        valorInicial[valorActual] = (!valorInicial[valorActual]) ? 1 : valorInicial[valorActual]+1;
        // if(!valorInicial[valorActual]) valorInicial[valorActual] = 1;
        // else valorInicial[valorActual] += 1;

        return valorInicial;
    },{})
}
module.exports = countWords



