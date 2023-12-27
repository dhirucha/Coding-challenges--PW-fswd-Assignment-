// Function to check if a given URL is valid
const isValidURL = (url) => {
    // Regular expression for matching valid URLs
    const urlPattern = /^(http|https):\/\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=]+[a-zA-Z]+$/;
  
    // Test the input URL against the regex pattern
    return urlPattern.test(url);
  };
  
  // Test cases
  const testURL1 = "http://www.example.com";
  const testURL2 = "https://subdomain.example123.org";
  const testURL3 = "ftp://invalid.url";
  
  // Check and print the results
  console.log(`"${testURL1}" is ${isValidURL(testURL1) ? "valid" : "invalid"} URL.`);
  console.log(`"${testURL2}" is ${isValidURL(testURL2) ? "valid" : "invalid"} URL.`);
  console.log(`"${testURL3}" is ${isValidURL(testURL3) ? "valid" : "invalid"} URL.`);
  