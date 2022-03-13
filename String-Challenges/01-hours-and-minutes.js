function StringChallenge(num) {
  // code goes here
  let hours = Math.floor(num / 60);
  let mins = num % 60;
  num = hours + ":" + mins;
  return num;
}

// keep this function call here
console.log(StringChallenge(readline()));
