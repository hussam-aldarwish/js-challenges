# JS Number Challenges

1.  **Recursion**:

    Have the function RecursionChallenge(num) take the num parameter being passed and return the factorial of it. For example: if num = 4, then your program should return (4 \* 3 \* 2 \* 1) = 24. For the test cases, the range will be between 1 and 18 and the input will always be an integer.

    **Examples:**

    > Input: 4  
    > Output: 24

    > Input: 8  
    > Output: 40320

    **Solution:**

    ```js
    // 01-recursion.js
    
    function RecursionChallenge(num) {
      // code goes here
      if (num === 1) return 1;
      return num * RecursionChallenge(num - 1);
    }
    
    // keep this function call here
    console.log(RecursionChallenge(readline()));
    
    ```
