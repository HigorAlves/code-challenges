// Function to check if a word is a palindrome
function isPalindrome(word) {
  // Convert the word to all uppercase for case-insensitivity
  word = word.toUpperCase();

  // Reverse the word
  const reversedWord = word.split('').reverse().join('');

  // Check if the reversed word is the same as the original word
  return word === reversedWord;
}

// Function to test if isPalindrome works correctly
function testIsPalindrome() {
  const testCases = [
    { input: "HANNAH", expected: true },
    { input: "GAGA", expected: false },
    { input: "RACECAR", expected: true },
    { input: "HELLO", expected: false }
  ];

  testCases.forEach((testCase, index) => {
    const { input, expected } = testCase;
    const result = isPalindrome(input);

    if (result === expected) {
      console.log(`Test case ${index + 1} passed.`);
    } else {
      console.log(`Test case ${index + 1} failed. Expected ${expected} but got ${result}.`);
    }
  });
}

// Run the tests
testIsPalindrome();
