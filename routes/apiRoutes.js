const router = require("express").Router();
const db = require("../models");
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public.index.html"));
});

router.get("/exercise", (req, rest) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"));
});

