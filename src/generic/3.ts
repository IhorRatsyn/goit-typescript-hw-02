function merge<T, U>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

// Приклад використання:
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj); 

export {};