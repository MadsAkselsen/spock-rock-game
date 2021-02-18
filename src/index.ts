// to use this file go to webpack config and change the entry to index.ts

const resultText = document.getElementById('resultText');

console.log('test');

let test: string = 'hi';

const testfunction = (prop: string): string => {
  return prop;
};

resultText.textContent = 'this is a test';
