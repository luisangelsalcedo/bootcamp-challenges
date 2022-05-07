import jwt from "jsonwebtoken";

export const generateJWT = payload => {
  const promise = new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      config.token.secret,
      {
        expiresIn: "1d",
      },
      (err, token) => {
        if (!err) resolve(token);
        else reject(err);
      }
    );
  });

  return promise;
};
