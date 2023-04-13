function fizzBuzz() {
  const phoneNo = prompt();
  const phonestr = phoneNo.toString();
  let sum = 0;
  for (let i = 0; i < phonestr.length; i++) {
    sum += parseInt(phonestr.charAt(i));
  }
  let output = '';
  for (let i = 1; i <= sum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      output += 'FizzBuzz ';
    } else if (i % 4 === 0) {
      output += 'Fizz ';
    } else if (i % 5 === 0) {
      output += 'Buzz ';
    } else {
      output += i + ' ';
    }
  }
  console.log(output.trim());
}
fizzBuzz();
