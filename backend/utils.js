import jwt from 'jsonwebtoken'
export const generateToken = user => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    },
    process.env.SECRET_KEY,
    { expiresIn: '30d' }
  )
}

// verify login user
export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization
  if (authorization) {
    // to get the token from the header
    const token = authorization.slice(7, authorization.length)
    jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
      if (error) {
        res.status(401).send({ message: 'Invalid token' })
      } else {
        req.user = decode
        next()
      }
    })
  } else {
    res.status(401).send({ message: 'No token' })
  }
}

// isAdmin
export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next()
  } else {
    res.status(401).send({ mesaage: 'Invalid Admin Token' })
  }
}
