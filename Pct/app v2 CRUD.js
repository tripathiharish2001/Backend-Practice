const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// ########################################################33

app.get("/api/v1/tours", (req, res) => {
  res.json({
    status: "success",
    data: {
      tours: tours,
    },
  });
});

// ########################################################33

// app.get("/api/v1/tours/:id/:o/:j", (req, res) => {
app.get("/api/v1/tours/:id", (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  console.log(id);

  const tour = tours.find((el) => {
    return el.id === id;
  });

  if (!tour)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.json({
    status: "success",
    data: {
      tour: tour,
    },
  });
});

// ############################################################3

app.post("/api/v1/tours", (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          tours: newTour,
        },
      });
    }
  );
  // res.send("Done!");
});

// ############################################################3

// Havent implemented functionality

app.patch("/api/v1/tours/:id", (req, res) => {
  if (+req.params.id > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here....>",
    },
  });
});

// ############################################################3

// For delete we can have the same with "delete", and chekc whether id exists or not
// after which we can implement our delete logic and send the ewsponse accordingly

// ############################################################3

app.listen(8000, () => {
  console.log("App is node listening to port !!!");
});
