const express = require('express');
const cors = require('cors');
const passport = require('passport');
require('./services/passport');

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL || true, credentials: true }));
app.use(express.json());
app.use(passport.initialize());

app.use('/auth', authRoutes);

app.get('/', (req, res) => res.json({ ok: true, service: 'auth' }));

module.exports = app;