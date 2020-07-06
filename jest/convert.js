let convert = (num) => {
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return "FizzBuzz"
    }
    return "Fizz"
  }
  if (num % 5 === 0) {
    return "Buzz"
  }

  return String(num);
}

module.exports = convert;
