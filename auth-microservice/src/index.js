require('dotenv').config();
const app = require('./app');
const prisma = require('./prisma');

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
  console.log(`Auth service listening on http://localhost:${PORT}`);
  try {
    await prisma.$connect();
    console.log('Connected to database');
  } catch (err) {
    console.error('Prisma connection error', err);
  }
});