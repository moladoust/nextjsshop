import jwt from 'jsonwebtoken';

export const signToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );
};

export const verifyToken = jwtToken => {
  try {
    return jwt.verify(jwtToken, process.env.JWT_SECRET);
  } catch (e) {
    console.log('error: ', e);
    return;
  }
};

export const isAuth = async (req, res, next) => {

  const authorization = req.headers.authorization;

  if (authorization) {
    const token = authorization.slice(7, authorization.length);

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {

      if (err) {
        res.status(401).send({ message: 'Invalid Token' });
      } else {
        req.user = decode;
        next();
      }
    });

  } else {
    res.status(401).send({ message: 'No Token' });
  }
};

export const isAdmin = (req, res, next) => {
  
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: 'Invalid Admin Token' });
  }
};
