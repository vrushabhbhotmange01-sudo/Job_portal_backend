import jwt from "jsonwebtoken";
import User from "../modules/user.js";

// protect middleware with built-in role check
export const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Extract token
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Attach user to request
      req.user = await User.findById(decoded.id).select("-password");

      // Role-based access check for specific routes
      // Example: POST /jobs is recruiters only
      if (
        req.route &&
        req.route.path === "/" &&
        req.method === "POST" &&
        req.user.role !== "recruiter"
      ) {
        return res.status(403).json({ message: "Forbidden: Only recruiters can perform this action" });
      }

      // All good
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    return res.status(401).json({ message: "No token, authorization denied" });
  }
};


export const authorize = (...allowedRoles) => {
  return (req, res, next) => {
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: You do not have access to this resource" });
    }
    next();
  };
};