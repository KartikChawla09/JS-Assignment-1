/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const expenses = new Map();

  // Iterate through transactions and accumulate total spent for each category
  for (const txn of transactions) {
    const category = txn.category;
    const price = parseFloat(txn.price);

    if (!isNaN(price) && category !== undefined) {
      if (expenses.has(category)) {
        expenses.set(category, expenses.get(category) + price);
      } else {
        expenses.set(category, price);
      }
    }
  }

  // Create the result array with unique categories and filter out undefined or NaN values
  const result = Array.from(expenses, ([category, totalSpent]) => ({
    category,
    totalSpent,
  })).filter(
    (entry) => entry.category !== undefined && !isNaN(entry.totalSpent)
  );

  return result;
}

module.exports = calculateTotalSpentByCategory;
