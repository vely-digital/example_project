const express = require("express");
const Cars = require("./model");
const router = express.Router();

router.get("/cars", async (req, res) => {
  const cars = await Cars.find();
  res.send(cars);
});

router.post("/cars", async (req, res) => {
  const postBody = req.body;

  const filter = {
    make: postBody.make,
    model: postBody.model,
    year: postBody.year,
  };
  const carsCount = await Cars.countDocuments(filter);

  console.log("carsCount", carsCount);

  if (carsCount == 0) {
    const cars = new Cars(filter);
    await cars.save();
    res.send(cars);
    return;
  } else {
    res.status(405).send({ message: "Car exist" });
    return;
  }
});

router.delete("/cars/:id", async (req, res) => {
  const cars = await Cars.deleteOne({ _id: req.params.id });
  res.send(cars);
});

module.exports = router;
