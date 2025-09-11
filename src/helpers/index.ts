import crypto from 'crypto';

// Load pepper from environment variable (fallback if not set)
const PEPPER = process.env.PEPPER || 'default-pepper';

// Generate a random salt (16 bytes, encoded as base64)
export const random = () => crypto.randomBytes(16).toString('base64');

// Create a password hash using HMAC + salt + pepper
export const authentication = (salt: string, password: string) => {
    return crypto
        .createHmac('sha256', [salt, password].join('/'))  // HMAC with SHA-256 algorithm, key = salt + password
        .update(PEPPER) // Add the pepper (extra secret only stored on server)
        .digest('hex'); // Final hash output in hex format
};
