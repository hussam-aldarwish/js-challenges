# JS String Challenges

1.  **Hours and Minutes**:

    Have the function StringChallenge(num) take the num parameter being passed and return the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

    **Examples:**

    > Input: 126
    > Output: 2:6

    > Input: 45
    > Output: 0:45

    **Solution:**

    ```js
    // 01-hours-and-minutes.js
    
    function StringChallenge(num) {
      // code goes here
      let hours = Math.floor(num / 60);
      let mins = num % 60;
      num = hours + ":" + mins;
      return num;
    }
    
    // keep this function call here
    console.log(StringChallenge(readline()));
    
    ```
