const express = require("express");

const router = express.Router();

let destinations = [
  {
    id: 1,
    name: "Valley of Flowers",
    state: "Uttarakhand",
    type: "Nature",
    image: "/images/destinations/homestay.jpg",
    description: "Experience the UNESCO World Heritage alpine valley filled with colorful flowers."
  },
  {
    id: 2,
    name: "Spiti Valley",
    state: "Himachal Pradesh",
    type: "Adventure",
    image: "/images/destinations/mountain.jpg",
    description: "Discover breathtaking mountain landscapes and eco-friendly adventures."
  },
  {
    id: 3,
    name: "Coorg",
    state: "Karnataka",
    type: "Eco Tourism",
    image: "/images/destinations/camping.jpg",
    description: "Explore coffee plantations, forests, and sustainable tourism experiences."
  }
];

// GET all
router.get("/", (req, res) => {
  console.log("🔥 API HIT!");
  res.status(200).json(destinations);
});

// SEARCH
router.get("/search/:name", (req, res) => {

  const result = destinations.filter(

    d =>
      d.name
        .toLowerCase()
        .includes(req.params.name.toLowerCase())

  );

  res.json(result);

});

// GET one
router.get("/:id", (req, res) => {

  const destination = destinations.find(
    d => d.id == req.params.id
  );

  if (!destination) {

    return res
      .status(404)
      .json({ message: "Destination not found" });

  }

  res.json(destination);

});


// POST
router.post("/", (req, res) => {

  const newDestination = {

    id: destinations.length + 1,

    ...req.body

  };

  destinations.push(newDestination);

  res.status(201).json(newDestination);

});


// PUT
router.put("/:id", (req, res) => {

  const index = destinations.findIndex(
    d => d.id == req.params.id
  );

  if (index === -1) {

    return res
      .status(404)
      .json({ message: "Destination not found" });

  }

  destinations[index] = {

    ...destinations[index],

    ...req.body

  };

  res.json(destinations[index]);

});


// DELETE
router.delete("/:id", (req, res) => {

  destinations = destinations.filter(
    d => d.id != req.params.id
  );

  res.status(204).send();

});




module.exports = router;