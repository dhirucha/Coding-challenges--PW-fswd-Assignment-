// Function to check if a given LinkedIn profile URL is valid
const isValidLinkedInURL = (url) => {
    // Regular expression for matching valid LinkedIn profile URLs
    const linkedInUrlPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
  
    // Test the input URL against the regex pattern
    return linkedInUrlPattern.test(url);
  };
  
  // Test cases
  const testURL1 = "https://www.linkedin.com/in/johndoe123";
  const testURL2 = "https://www.linkedin.com/in/mary_smith";
  const testURL3 = "https://www.linkedin.com/in/user1234-";
  const testURL4 = "http://www.linkedin.com/in/invalidformat";
  const testURL5 = "https://www.linkedin.com/company/companyname";
  
  // Check and print the results
  console.log(`"${testURL1}" is ${isValidLinkedInURL(testURL1) ? "valid" : "invalid"} LinkedIn profile URL.`);
  console.log(`"${testURL2}" is ${isValidLinkedInURL(testURL2) ? "valid" : "invalid"} LinkedIn profile URL.`);
  console.log(`"${testURL3}" is ${isValidLinkedInURL(testURL3) ? "valid" : "invalid"} LinkedIn profile URL.`);
  console.log(`"${testURL4}" is ${isValidLinkedInURL(testURL4) ? "valid" : "invalid"} LinkedIn profile URL.`);
  console.log(`"${testURL5}" is ${isValidLinkedInURL(testURL5) ? "valid" : "invalid"} LinkedIn profile URL.`);
  