// Add your functions here


//cb is essentially a callback function.
//we could see the first line of the code as:

//function map(src, function(elementInIteration){...}) {
//    let r = []
//    ...
//}

//why we wrote it like this is because we can invoke
//any function to operate on these numbers

function map(src, cb) {
    let r = []
  
    for (let i = 0; i < src.length; i++) {
      let theElement = src[i]
      r.push(cb(theElement))
    }
  
    return r;
  }

  function reduce(src, cb, starting){
    let r = (!!starting) ? starting : src[0]
    let i = (!!starting) ? 0 : 1
  
    for (; i < src.length; i++) {
      r = cb(src[i], r)
    }
  
    return r;
  }