// Function to reverse a string
function reverseString(input) {
    return input.split('').reverse().join('');
  }
  
  // Main program
  function reverseAfterDelay(input) {
    // Display the original string
    console.log('Original String:', input);
  
    // Set a delay of 2 seconds using setTimeout
    setTimeout(function () {
      // Reverse the string after the delay
      const reversedString = reverseString(input);
  
      // Display the reversed string
      console.log('Reversed String:', reversedString);
    }, 2000);
  }
  
  // Example usage
  const inputString = "Hello, World!";
  reverseAfterDelay(inputString);
  