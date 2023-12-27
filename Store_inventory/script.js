// Sample store object with prices in USD
const store = {
    item1: 25,
    item2: 40,
    item3: 15,
    // Add more items and their prices as needed
  };
  
  // Function to convert USD prices to INR using an exchange rate of 1 USD to 80 INR
  const convertToINR = (usdPrice) => usdPrice * 80;
  
  // Use the map higher-order function to create a new object with prices in INR
  const storeInINR = Object.fromEntries(
    Object.entries(store).map(([item, usdPrice]) => [item, convertToINR(usdPrice)])
  );
  
  // Display the original and converted prices
  console.log("Original Prices (USD):", store);
  console.log("Converted Prices (INR):", storeInINR);
  