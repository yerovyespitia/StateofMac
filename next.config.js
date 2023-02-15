module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
    loader: "akamai",
    path: "",
  },
  env: {
    API_URL: process.env.API_URL,
    GOOGLE_ID: process.env.GOOGLE_ID,
    MONGO_URI: process.env.MONGO_URI,
  },
}
