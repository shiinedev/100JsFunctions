// 23.halfAndHalf
const halfAndHalf = (text) => {
    const firstHalf = text.slice(0, text.length / 2);
    const secondHalf = text.slice(text.length / 2);
    return `${firstHalf.toLowerCase()}${secondHalf.toUpperCase()}`;
  };
  
  // Example usage:
  console.log(halfAndHalf("Good Morning")); // good mORNING