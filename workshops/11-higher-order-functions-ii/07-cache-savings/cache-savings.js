// YOUR CODE BELOW

function cacheSavings(func) {
  debugger;
  let cache = {};
  return function newFunc(a) {
    debugger;
    if (cache[a]) {
      return cache[a];
    }
    let result = func(a);
    cache[a] = result;
    return result;
  };
}
