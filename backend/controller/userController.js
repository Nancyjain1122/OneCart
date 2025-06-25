import User from "../model/userModel.js";

export const getCurrentUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Failed to get user", error: err });
  }
};

export const getAdmin = async (req, res) => {
  try {
    const adminEmail = req.user?.email;
    if (!adminEmail) {
      return res.status(404).json({ message: "Admin not found" });
    }

    return res.status(200).json({
      email: adminEmail,
      role: "admin",
    });
  } catch (error) {
    return res.status(500).json({ message: `getAdmin error ${error.message}` });
  }
};
