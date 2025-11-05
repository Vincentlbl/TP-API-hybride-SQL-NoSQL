const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

router.get("/", profileController.getProfiles);
router.get("/:id", profileController.getProfile);
router.post("/", profileController.createProfile);
router.delete("/:id", profileController.deleteProfile);

module.exports = router;
