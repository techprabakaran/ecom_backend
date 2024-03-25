const jwt = require('jsonwebtoken');

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}


// Generate a random OTP
const generateRandom = () => {
	return Math.floor(100000 + Math.random() * 9000).toString();
};

module.exports = {
    generateToken,
    generateRandom
}