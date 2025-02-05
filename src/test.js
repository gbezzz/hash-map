import { HashMap } from './hashmap.js'
import { HashSet } from './hashset.js'

const test = new HashMap(0.75)

console.log(test)
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('lion', 'yellow')
test.set('moon', 'silver')
// test.set('sun', 'silver')
// console.log(test.entries().length)
console.log(test.entries())
// console.log(test.keys())
// test.remove('elephant')
// test.remove('moon')
