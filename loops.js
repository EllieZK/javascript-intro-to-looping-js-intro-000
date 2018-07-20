function forLoop(array){

  for (let i = 0; i < 25; i++) {
    if (i===1) {
      return ("I am 1 strange loop.")}
    else {
      return ("I am ${i} strange loops.")}
        return array;
  }
}

function whileLoop(n){
  while(whileLoop(n < 2)){
    console.log(--n)
    return 'done.'
  }
}


function doWhileLoop(array){
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    console.log(maybeTrue)
  } while (maybeTrue(array.length > 0 && maybeTrue()));
}
