// code your solution here
function superbowlWin(record) {
    // Use the find() method to search for the first object with result "W"
    const result = record.find(item => item.result === "W");
  
    // If a win is found, return the year, otherwise return undefined if no win
    return result ? result.year : undefined;
  }
  
  // Example usage
  const record = [
    { year: "2015", result: "w" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    //...
  ];
  
  console.log(superbowlWin(record));  // Outputs: "2013"
  



  