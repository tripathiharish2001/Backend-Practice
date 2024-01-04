const express = require("express");
const fs = require("fs");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());

// Middle ware
app.use((req, res, next) => {
  console.log("Entered into middle ware!");
  next();
});

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// ########################################################33

// Route Hnadlers
const getAllRoutes = (req, res) => {
  res.json({
    status: "success",
    data: {
      tours: tours,
    },
  });
};

const getTour = (req, res) => {
  // console.log(req.params.id);
  const id = +req.params.id;
  console.log(req.params);

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
};

const createTour = (req, res) => {
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
};

const updateTour = (req, res) => {
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
};

const deleteTour = (req, res) => {
  if (+req.params.id > tours.length)
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });

  res.status(200).json({
    status: "success",
    data: {
      tour: "<Deleted tour here....>",
    },
  });
};

// ########################################################33

// Routes

// app.get("/api/v1/tours", getAllRoutes);
// app.get("/api/v1/tours/:id", getTour);
// app.post("/api/v1/tours", createTour);
// app.patch("/api/v1/tours/:id", updateTour);
// app.delete("/api/v1/tours/:id", deleteTour);

// ########################################################3

app.route("/api/v1/tours").get(getAllRoutes).post(createTour);

app
  .route("/api/v1/tours/:id")
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// ############################################################3

// Start Server

app.listen(8000, () => {
  console.log("App is node listening to port !!!");
});
