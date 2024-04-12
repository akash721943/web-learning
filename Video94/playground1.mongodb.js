
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('courses').insertMany([
    {
      "name": "Java",
      "price": 20000,
      "instructor": "Aakash"
    },
    {
      "name": "Python",
      "price": 25000,
      "instructor": "Sara"
    },
    {
      "name": "JavaScript",
      "price": 18000,
      "instructor": "John"
    },
    {
      "name": "C++",
      "price": 22000,
      "instructor": "Michael"
    },
    {
      "name": "HTML",
      "price": 15000,
      "instructor": "Emily"
    },
    {
      "name": "CSS",
      "price": 16000,
      "instructor": "David"
    },
    {
      "name": "Ruby",
      "price": 23000,
      "instructor": "Sophia"
    },
    {
      "name": "Swift",
      "price": 27000,
      "instructor": "Daniel"
    },
    {
      "name": "PHP",
      "price": 19000,
      "instructor": "Olivia"
    },
    {
      "name": "SQL",
      "price": 21000,
      "instructor": "William"
    }
  ]
  );
// Print a message to the output window.
console.log(`Done Inserting Data`);
