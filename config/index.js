module.exports = {
  mongoURI: process.env.mongoURI || '',
  JWTSecret: process.env.JWTSecret || '',
  JWTIssuer: process.env.JWTIssuer || '',
  JWTAudience: process.env.JWTAudience || '',
  instagramClientID: process.env.instagramClientID || '',
  instagramClientSecret: process.env.instagramClientSecret || '',
  googleClientID: process.env.googleClientID || '',
  googleClientSecret: process.env.googleClientSecret || '',
  facebookClientID: process.env.facebookClientID || '',
  facebookClientSecret: process.env.facebookClientSecret || '',
  sendGridKey: process.env.SENDGRID_KEY || '',
  cloudinaryUrl: process.env.CLOUDINARY_URL || '',
  cloudinaryName: process.env.CLOUDINARY_NAME || '',
  cloudinaryKey: process.env.CLOUDINARY_KEY || '',
  cloudinarySecret: process.env.CLOUDINARY_SECRET || '',
};
