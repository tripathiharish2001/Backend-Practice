const fs = require("fs");
const crypto = require("crypto");

// process.env.UV_THREADPOOL_SIZE = 1;
// const OS = require("os");
// process.env.UV_THREADPOOL_SIZE = OS.cpus().length;

const start = Date.now();
fs.readFile("./test-file.txt", "utf-8", (err, data) => {
  // console.log(data);
  console.log("I/O FINISHED");
  console.log("-----------------------------");

  setTimeout(() => {
    console.log("Data 1");
  });
  setTimeout(() => {
    console.log("Data 2");
  }, 1000);
  setTimeout(() => {
    console.log("Data 3");
  }, 3000);
  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password Encrypted!!!  ");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password Encrypted!!!");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password Encrypted!!!");
  });

  crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
    console.log(Date.now() - start, " Password Encrypted!!!");
  });
});
