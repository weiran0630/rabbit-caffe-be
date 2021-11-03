module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "54b8cdeda85afd74618c08d16fc61f31"),
    },
  },
});
