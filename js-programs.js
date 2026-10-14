// 1. Arithmetic operations on two numbers
{
  const a = 12;
  const b = 5;

  console.log("Addition:", a + b);
  console.log("Subtraction:", a - b);
  console.log("Multiplication:", a * b);
  console.log("Division:", a / b);
  console.log("Remainder:", a % b);
}

// 2. Compare two numbers
{
  const a = 10;
  const b = 7;

  console.log("a > b:", a > b);
  console.log("a < b:", a < b);
  console.log("a >= b:", a >= b);
  console.log("a <= b:", a <= b);
  console.log("a === b:", a === b);
  console.log("a !== b:", a !== b);
}

// 3. Demonstrate logical operators (&&, ||, !)
{
  const age = 20;
  const hasID = true;

  console.log("Can enter:", age >= 18 && hasID);
  console.log("Needs permission:", age < 18 || !hasID);
  console.log("Does not have ID:", !hasID);
}

// 4. Check whether a number is positive
{
  const number = 8;

  if (number > 0) {
    console.log("The number is positive.");
  } else {
    console.log("The number is not positive.");
  }
}

// 5. Check whether a number is even or odd
{
  const number = 13;

  if (number % 2 === 0) {
    console.log("The number is even.");
  } else {
    console.log("The number is odd.");
  }
}

// 6. Check voting eligibility
{
  const age = 19;

  if (age >= 18) {
    console.log("Eligible to vote.");
  } else {
    console.log("Not eligible to vote.");
  }
}

// 7. Check whether a number is positive, negative, or zero
{
  const number = -4;

  if (number > 0) {
    console.log("The number is positive.");
  } else if (number < 0) {
    console.log("The number is negative.");
  } else {
    console.log("The number is zero.");
  }
}

// 8. Calculate a grade based on marks
{
  const marks = 85;

  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 80) {
    console.log("Grade: B");
  } else if (marks >= 70) {
    console.log("Grade: C");
  } else if (marks >= 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

// 9. Find the largest of two numbers
{
  const a = 14;
  const b = 21;

  if (a > b) {
    console.log("Largest:", a);
  } else if (b > a) {
    console.log("Largest:", b);
  } else {
    console.log("The numbers are equal.");
  }
}

// 10. Check whether a year is a leap year
{
  const year = 2024;

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year, "is a leap year.");
  } else {
    console.log(year, "is not a leap year.");
  }
}

// 11. Print numbers from 1 to 10
{
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

// 12. Print the multiplication table of a number
{
  const number = 6;

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
  }
}

// 13. Sum the first N natural numbers
{
  const n = 10;
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log("Sum:", sum);
}

// 14. Print all even numbers between 1 and 50
{
  for (let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
}

// 15. Count numbers divisible by 3 between 1 and 100
{
  let count = 0;

  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
      count++;
    }
  }

  console.log("Count:", count);
}

// 16. Find the largest of three numbers
{
  const a = 12;
  const b = 27;
  const c = 19;
  let largest = a;

  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }

  console.log("Largest:", largest);
}

// 17. Check whether a number is divisible by both 3 and 5
{
  const number = 45;

  if (number % 3 === 0 && number % 5 === 0) {
    console.log("The number is divisible by both 3 and 5.");
  } else {
    console.log("The number is not divisible by both 3 and 5.");
  }
}

// 18. Calculate factorial using a for loop
{
  const number = 5;
  let factorial = 1;

  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  console.log(`${number}! = ${factorial}`);
}

// 19. Print numbers from 50 to 1 in reverse order
{
  for (let i = 50; i >= 1; i--) {
    console.log(i);
  }
}

// 20. Sum all odd numbers between 1 and 100
{
  let sum = 0;

  for (let i = 1; i <= 100; i += 2) {
    sum += i;
  }

  console.log("Sum of odd numbers:", sum);
}