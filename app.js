// Q1 - Display a rating from numbers to stars (eg. 2.5 = "* * .")
// Note: Math.floor - rounds down number so doesn't loop again for 0.5
//  '+=' is the same as ratings = ratings + ""

function showRating(rating) {
  let ratings = "";
  for (let i = 0; i < Math.floor(rating); ++i) {
    ratings += "*";
    if (i !== Math.floor(rating) - 1) {
      ratings += " ";
    }
  }
  if (!Number.isInteger(rating)) {
    ratings += " .";
  }
  return ratings;
}

console.log(showRating(4.5));

// Q2 - Sort an array from lowest to highest price
// Note: 'sort' is done alphabetically from default

function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => a - b);
}

console.log(sortLowToHigh([1, 10, 300, 20, 4]));

// Q3 - Sort an array of objects from highest to lowest price
// Note: Use the property from the object you want iterate over

function sortLowToHigh(numbers) {
  return numbers.sort((a, b) => b.price - a.price);
}

console.log(
  sortLowToHigh([
    { id: 1, price: 70 },
    { id: 2, price: 200 },
    { id: 3, price: -10 },
  ])
);

// Q4 - Promises (Already covered previously)

// Q5 - Find all the posts by a single user (https://jsonplaceholder.typicode.com/posts)
// Note: Use fetch to access backend information & convert using promises to be readable in frontend

async function postByUser(userId) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json()

    const posts = result.filter(element => element.userId === userId)

    console.log(posts)
}

postByUser(2)

// Q6 - Find the first 6 incomplete Todos from the list (https://jsonplaceholder.typicode.com/todos)
// Note: Use '.slice()' to limit the search

async function firstSixIncomplete(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()

    const incomplete = result.filter(element => !element.completed).slice(0, 6)

    console.log(incomplete)
}

firstSixIncomplete (6)

