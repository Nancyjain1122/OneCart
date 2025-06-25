import jwt from "jsonwebtoken";

const adminAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({ message: "Not Authorized. Login Again." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ message: "Access denied. Not an admin." });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(500).json({ message: `adminAuth error ${error.message}` });
  }
};

export default adminAuth;
