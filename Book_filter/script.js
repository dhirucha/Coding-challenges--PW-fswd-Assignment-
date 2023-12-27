// Sample list of books with authors and publication years
const books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2012 },
    { title: "Book3", author: "author3", year: 2008 },
    // Add more books as needed
  ];
  
  // Function to capitalize the first letter of each word in a string
  const capitalize = (str) => str.replace(/\b\w/g, (char) => char.toUpperCase());
  
  // Filter out books published before 2010 and capitalize author names
  const filteredBooks = books
    .filter((book) => book.year >= 2010)
    .map((book) => ({
      title: book.title,
      author: capitalize(book.author),
      year: book.year,
    }));
  
  // Display the original and filtered books
  console.log("Original Books:", books);
  console.log("Filtered Books (published after 2010 with capitalized authors):", filteredBooks);
  