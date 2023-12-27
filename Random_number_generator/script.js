function generateRandomNumberWithDelay(delayInSeconds) {
    // Display initial message
    console.log(`Generating a random number after a delay of ${delayInSeconds} seconds...`);
  
    // Initialize countdown variable
    let countdown = delayInSeconds;
  
    // Display countdown message every second
    const countdownInterval = setInterval(function () {
      console.log(`${countdown} seconds remaining...`);
      countdown--;
  
      // Check if countdown is complete
      if (countdown < 0) {
        // Generate random number
        const randomNumber = Math.floor(Math.random() * 100); // Change range as needed
  
        // Display generated number
        console.log(`Random number generated: ${randomNumber}`);
  
        // Clear the interval to stop the countdown
        clearInterval(countdownInterval);
      }
    }, 1000); // Display countdown every 1000 milliseconds (1 second)
  }
  
  // Set the delay time (in seconds)
  const delayTimeInSeconds = 3;
  
  // Call the function with the specified delay
  generateRandomNumberWithDelay(delayTimeInSeconds);
  