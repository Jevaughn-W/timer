const setTime = process.argv;
setTime.splice(0, 2); // Takes in where to start and second argument decides how much to take off - permanently changes the array

 const setTimeAsNumber = setTime.map(x => Number(x));

// Driver Code
setTimeAsNumber.forEach((x) => {
  if( typeof(x) === "number" && x > 0 && x !== ""){
     setTimeout(() => {
      console.log(`${x / 1000} seconds`);
      process.stdout.write('\x07');
    }, x);
  }
});
