const jwt = require('jsonwebtoken');
  
const SECRET_KEY = process.env.JWT_SECRET;

// Define a User type
interface User {
    _id: string;
    email: string;
}

// Define a type for the JWT payload
interface JwtPayload {
    id: string;
    email: string;
}

// Generate token function
const generateToken = (user: User): string => {
    return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
        expiresIn: '1h'
    });
};

// Verify token function
const verifyToken = (token: string): JwtPayload | string => {
    return jwt.verify(token, SECRET_KEY) as JwtPayload; // Cast to JwtPayload
};

export { generateToken, verifyToken };
