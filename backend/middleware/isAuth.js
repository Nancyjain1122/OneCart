import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(400).json({ message: "No token found" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
};

export default isAuth;
