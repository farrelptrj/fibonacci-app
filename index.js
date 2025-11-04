#!/usr/bin/env node

// index.js
// Usage: node index.js <n>
// If no n provided, default ke 10

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  const seq = [0, 1];
  while (seq.length < n) {
    const len = seq.length;
    seq.push(seq[len - 1] + seq[len - 2]);
  }
  return seq;
}

// parse CLI argument
const arg = process.argv[2];
const n = arg ? Number(arg) : 10;

if (Number.isNaN(n) || n < 0 || !Number.isInteger(n)) {
  console.error("Error: berikan bilangan bulat non-negatif, contoh: node index.js 7");
  process.exit(1);
}

const seq = fibonacci(n);
console.log(seq.join(", "));
console.log("Hello World");

