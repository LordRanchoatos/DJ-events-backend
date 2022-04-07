module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c648b770a381a1ae2e8843525c3d92fc'),
  },
});
