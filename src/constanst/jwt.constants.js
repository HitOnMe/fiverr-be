export const jwtConstants = {
    secret: process.env.SECRET_KEY,
    ACCESS_TOKEN_RUNTIME: process.env.ACCESS_TOKEN_RUNTIME,
    SALT_BCRYPT : process.env.SALT_BCRYPT,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID || '',
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY || '',
    AWS_REGION: process.env.AWS_REGION || '',
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME || '',
}
