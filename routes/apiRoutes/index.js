const router = require('express').Router();
const noteRoutes = require('../apiroutes/noteRoutes');

router.use(noteRoutes);

module.exports =router;