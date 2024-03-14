function getPromise<T extends any[]>(type: T) {
  return new Promise<T>((resolve) => {
    resolve(type);
  });
}

getPromise(['Text', 50])
  .then((data) => {
    console.log(data); 
  });

export {};
