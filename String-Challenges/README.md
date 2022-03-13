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

2.  **Capitalize First Letter of Each Word:**

    Have the function StringChallenge(str) take the str parameter being passed and capitalize the first letter of each word. Words will be separated by only one space.

    **Examples:**

    > Input: "hello world"  
    > Output: Hello World

    > Input: "i ran there"  
    > Output: I Ran There

    **Solution:**

    ```js
    // 02-capitalize-first-letter-of-each-word.js

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
    ```
