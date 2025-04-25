import AuthServices from '../services/authService.js';
import jwt from 'jsonwebtoken';

export const loginController = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res
            .status(400)
            .json({ message: 'Username and password are required.' });
    }

    try {
        const data = await AuthServices(username, password);
        const thisTime = new Date().toISOString();
        const your_secret_key = 'your_secret_key'; // Replace with your actual secret key
        //const token = generateToken(data); // Assuming generateToken is a function to create a token
        const token = jwt.sign(
            { id: data.id, username: data.username, LoginTime: thisTime },
            your_secret_key,
            { expiresIn: '1h' }
        );
        // return token;
        return res
            .status(200)
            .json({ status: 200, message: 'Login successful', token });
    } catch (error) {
        console.error('Login error:', error.message);
        return res.status(500).json({
            status: 500,
            message: 'Login failed',
            error: error.message,
        });
    }
};

export const logoutController = async (req, res) => {
    try {
        // Implement logout logic if needed
        res.status(200).json({ status: 200, message: 'Logout successful' });
    } catch (error) {
        console.error('Logout error:', error.message);
        res.status(500).json({ status: 500, message: 'Logout failed' });
    }
};
