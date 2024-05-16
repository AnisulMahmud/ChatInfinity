import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const loggedInUser = req.user._id;

    const allUsers = await User.find({ _id: { $ne: loggedInUser } }).select(
      "-password"
    ); // find all users except the logged in user( cause I won't chat with myself) and without password as well

    res.status(200).json(allUsers);
  } catch (error) {
    console.log("error in getUsers in userController", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
