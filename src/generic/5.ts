interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

// Приклад використання:
const pair1: KeyValuePair<number, string> = { key: 1, value: 'one' };
const pair2: KeyValuePair<string, boolean> = { key: 'two', value: true };

console.log(pair1); 
console.log(pair2); 

export {};
