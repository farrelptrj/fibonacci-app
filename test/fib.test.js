// test/fib.test.js
const { execSync } = require("child_process");

function run(n) {
  try {
    const out = execSync(`node index.js ${n}`, { encoding: "utf8" }).trim();
    return out;
  } catch (e) {
    console.error(e.stdout ? e.stdout.toString() : e.message);
    process.exit(2);
  }
}

// contoh test: n = 7 -> "0, 1, 1, 2, 3, 5, 8"
const expected7 = "0, 1, 1, 2, 3, 5, 8";
const got7 = run(7);

if (got7 === expected7) {
  console.log("TEST PASS: n=7");
  process.exit(0);
} else {
  console.error("TEST FAIL: n=7");
  console.error("Expected:", expected7);
  console.error("Got     :", got7);
  process.exit(1);
}
