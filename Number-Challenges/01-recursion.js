function RecursionChallenge(num) {
  // code goes here
  if (num === 1) return 1;
  return num * RecursionChallenge(num - 1);
}

// keep this function call here
console.log(RecursionChallenge(readline()));
