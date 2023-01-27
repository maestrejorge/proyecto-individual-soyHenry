const express = require("express");
const {
  getInfo,
  postRecipe,
  getbyName,
  getbyFoodid,
} = require("../../controller/control.js");

const router = express.Router();

router.get("/:id", getbyFoodid);
router.get("/", getbyName);
router.get("/", getInfo);
router.post("/", postRecipe);

module.exports = router;
