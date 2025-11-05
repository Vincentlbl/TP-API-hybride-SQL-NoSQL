const Profile = require("../models/Profile.model");

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.json(profiles);
};

exports.getProfile = async (req, res) => {
  const profile = await Profile.findOne({ userId: req.params.id });
  res.json(profile);
};

exports.createProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      userId: req.body.userId,
      preferences: req.body.preferences || [],
      history: req.body.history || []
    });

    res.status(201).json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteProfile = async (req, res) => {
  await Profile.deleteOne({ userId: req.params.id });
  res.json({ message: "Profile deleted" });
};
