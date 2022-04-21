import jwt from "jsonwebtoken";

export const authentication = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!!auth) {
    const token = auth.split("Bearer ").join("");

    // verificar token
    jwt.verify(token, process.env.JWT_PASSWORD, (err, dataAuth) => {
      if (!!err) return res.status(401).json({ message: "Invalid token" });
      //
      req.auth = dataAuth; // send data user auth
      next();
    });
    //
  } else res.status(401).json({ message: "Token required" });
};
