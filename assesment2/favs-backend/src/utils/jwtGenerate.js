import jwt from "jsonwebtoken";

export const generateJWT = payload => {
  const promise = new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.JWT_PASSWORD,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        console.log(err, token);
        if (!err) resolve(token);
        else reject(null);
      }
    );
  });

  return promise;
};
