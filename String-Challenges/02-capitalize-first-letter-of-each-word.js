function StringChallenge(str) {
  // code goes here
  let array = str.toLowerCase().split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt(0).toUpperCase() + array[i].substring(1);
  }
  str = array.join(" ");
  return str;
}

// keep this function call here
console.log(StringChallenge(readline()));
