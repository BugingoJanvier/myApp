import { loginHandler } from '../database/config/auth.js'; // Adjust the path as needed

async function login(username, password) {
    try {
        if (!username || !password) {
            throw new Error('Username and password must not be blank');
        }

        const data = await loginHandler(username, password);
        return data;
    } catch (error) {
        console.error('Login error:', error.message);
        throw error;
    }
}

export default login;
