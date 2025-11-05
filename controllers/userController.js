const UserModel = require("../models/User.model");
const Profile = require("../models/Profile.model");

exports.getUsers = async (req, res) => {
  const users = await UserModel.getAllUsers();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await UserModel.getById(req.params.id);
  res.json(user);
};

exports.createUser = async (req, res) => {
  const { firstname, lastname, email } = req.body;
  const user = await UserModel.createUser(firstname, lastname, email);
  res.json(user);
};

exports.deleteUser = async (req, res) => {
  await UserModel.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};

exports.getFullUser = async (req, res) => {
  try {
    const user = await UserModel.getById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    const profile = await Profile.findOne({ userId: req.params.id });

    res.json({
      id: user.id,
      name: `${user.firstname} ${user.lastname}`,
      email: user.email,
      preferences: profile?.preferences || [],
      history: profile?.history?.map(h => ({
        book: h.book,
        stars: "★".repeat(h.rating)
      })) || []
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

