import dotenv from 'dotenv';
dotenv.config();

export const CONFIG = {
    // APP CONFIGURATION
    app_version: process.env.APP_VERSION || '1.0.0',
    app_semantic: process.env.APP_SEMANTIC || '0',
    env: process.env.APP_ENV || 'development',
    port: process.env.PORT ?? 8000,
    log: process.env.LOG == "true",
    secret: {
        token: process.env.TOKEN_SECRET || 'qwerty',
        password_encryption: process.env.SECRET_PASSWORD_ENCRYPTION || '',
        admin_password_encryption: process.env.SECRET_ADMIN_PASSWORD_ENCRYPTION || '',
        pin_encryption: process.env.SECRET_PIN_ENCRYPTION || '',
    },
    authorization: {
        username: process.env.AUTHORIZATION_USERNAME || 'areti',
        passsword: process.env.AUTHORIZATION_PASSWORD || 'p!s4n9-g0d0k-s3g0-t!wul'
    },
    base_url: process.env.BASE_URL || `http://localhost:${process.env.APP_PORT}`
}