//CRUD Operations

use("crudDb")

//CREATE Operation
// db.createCollection("courses")

// db.courses.insertOne({
//     name: "Aakash's Web Development",
//     price: 0,
//     assignment: 12,
//     projects: 3
// })

// db.courses.insertMany([
//     {
//         "name": "Aakash's Web Development",
//         "price": 0,
//         "assignment": 12,
//         "projects": 3
//     },
//     {
//         "name": "Advanced Python Programming",
//         "price": 0,
//         "assignment": 10,
//         "projects": 4
//     },
//     {
//         "name": "Full Stack JavaScript",
//         "price": 0,
//         "assignment": 15,
//         "projects": 5
//     },
//     {
//         "name": "Data Science Fundamentals",
//         "price": 0,
//         "assignment": 8,
//         "projects": 3
//     },
//     {
//         "name": "Mobile App Development with React Native",
//         "price": 0,
//         "assignment": 12,
//         "projects": 4
//     },
//     {
//         "name": "Machine Learning for Beginners",
//         "price": 0,
//         "assignment": 10,
//         "projects": 3
//     },
//     {
//         "name": "Web Design Essentials",
//         "price": 0,
//         "assignment": 8,
//         "projects": 2
//     },
//     {
//         "name": "Blockchain Basics",
//         "price": 0,
//         "assignment": 12,
//         "projects": 4
//     },
//     {
//         "name": "Cybersecurity Fundamentals",
//         "price": 0,
//         "assignment": 15,
//         "projects": 3
//     },
//     {
//         "name": "Artificial Intelligence Applications",
//         "price": 0,
//         "assignment": 10,
//         "projects": 5
//     }
// ]
// )

//READ Operation
// let a = db.courses.find({ price: 0 })

// console.log(a.toArray());


// let b = db.courses.findOne({ price: 0 })

// console.log(b);

//UPDATE Operation

// db.courses.updateMany(
//     {
//         price: 0
//     },
//     {
//         $set: { price: 1000 }
//     }
// )


// db.courses.updateOne({price: 0}, {$set:{price: 100}})

// db.courses.updateMany(
//     {
//         price: 0
//     },
//     {
//         $set: { price: 100 }
//     }
// )

//DELETE Operation

// db.courses.deleteOne({ price: 0 })

db.courses.deleteMany({price: 1000})