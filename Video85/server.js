var slugify = require('slugify')

let a = slugify('some string') //some string

console.log(a);

//If you prefer something otheer than '-' as separator
const b = slugify('some string', '_') //some string

console.log(b);
