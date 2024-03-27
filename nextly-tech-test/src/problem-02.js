// Define a phone book sorted by names
const phoneBook = [
  { name: "Higor", phone: "123-456-7890" },
  { name: "Alves", phone: "987-654-3210" },
  { name: "Deborah", phone: "555-111-2222" },
  { name: "Djalma", phone: "222-333-4444" },
  // ... (potentially many more entries)
];

// Binary Search to find a phone number by name
function findPhoneNumberByName(name, phoneBook) {
  let low = 0;
  let high = phoneBook.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midName = phoneBook[mid].name;

    if (midName === name) {
      return phoneBook[mid].phone;
    } else if (midName < name) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return "Not found";
}

// Test the function
const nameToSearch = "Deborah";
const phoneNumber = findPhoneNumberByName(nameToSearch, phoneBook);
if (phoneNumber !== "Not found") {
  console.log(`Found ${nameToSearch}'s phone number: ${phoneNumber}`);
} else {
  console.log(`${nameToSearch} not found in the phone book.`);
}
