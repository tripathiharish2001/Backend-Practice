const http = require("http");
const url = require("url");
const fs = require("fs");

const overView = fs.readFileSync("./templates/overview.html", "utf-8");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    // res.writeHead(200, { "Content-type": "text/html" });
    // res.end("At home page");
    res.end(overView);
    res.end("<h1>Page not found<h1/>");
  } else if (pathName === "/hello") {
    res.end("Server at hello");
  } else if (pathName === "/api") {
    fs.readFile("./dev-data/data.json", "utf-8", (err, data) => {
      const product = JSON.parse(data);
      res.writeHead(200, { "Content-type": "application/json" });
      res.end(data);
    });
  } else if (pathName === "/chetan") {
    res.end("Chetan chuttad");
  } else res.end("Page Not Found!");
});

server.listen(8000, () => {
  console.log("Listening at port 8000");
});
