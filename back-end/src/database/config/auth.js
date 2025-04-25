// auth.js
import dotenv from 'dotenv';
import ldap from 'ldapjs';

dotenv.config();

// LDAP Configuration
const LDAP_URL = process.env.LDAP_URL;

// Function to authenticate user (LDAP)
const authenticateUser = (username, password) => {
    return new Promise((resolve, reject) => {
        const client = ldap.createClient({ url: LDAP_URL });

        client.bind(username, password, (err) => {
            client.unbind();
            if (err) return resolve(false);
            resolve(true);
        });
    });
};

// Login Handler Function (used internally or by services)
const loginHandler = async (username, password) => {
    if (!username || !password) {
        throw new Error('Username and password are required');
    }

    const authenticated = await authenticateUser(username, password);

    if (!authenticated) {
        throw new Error('Invalid credentials');
    }

    return { message: 'Login successful' };
};

export { loginHandler };
