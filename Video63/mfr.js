let arr = [1, 3, 5, 7, 11]

// let newArr = []

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr[element**2]
// }

// let newArr = arr.map((e, index, arr)=>{
//     return e ** 2
// })

// console.log(newArr)



// const greaterThanSeven = (Element) => {
//     if(Element > 5)
//     {
//         return true
//     }

//     return false
// }


// console.log(arr.filter(greaterThanSeven))



let arr2 = [1, 2,3, 4, 5, 6]

const red =(a, b)=>{
    return a * b;
}

console.log(arr2.reduce(red))


let str = "Aakash"
let strArr = Array.from(str)
console.log(strArr)