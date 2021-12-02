// recursividad 1
const reverseLetters = (input, rest='')=>{
  let arr = input.split('');
  rest += arr.pop(); 
  if(arr.length <= 0) return rest;
  return reverseLetters(arr.join(''), rest); 
}

reverseLetters('freeCodeCamp');

// recursiviad 2
let contLetters = (str, letra , num = 0)=>{
  let letter = str.split('').indexOf(letra);
  let arr = str.split('').splice(letter+1);

  if(letter !==  -1){
    return contLetters(arr.join(), 'a', num+1);
  } else {
    return num;
  }
}
contLetters('filofobia','f');