const User = require("../models/user");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password, stats: [defaultStat] });
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        return res.status(200).json({ message: "user created", id: user._id });
    } catch (err) {
        if (err.code === "11000") {
            res.header("Access-Control-Allow-Origin", "http://localhost:3000");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            res.header("Access-Control-Allow-Credentials", "true");
            return res.status(400).json({ message: "User already exists" });
        }
        res.header("Access-Control-Allow-Origin", "http://localhost:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        return res.status(500).json({ message: err.message });
    }
};


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email, password: password });
        if (!user || user.email !== email) {
            return res.json({ status: "not found", error: "invalid credentials" });
        }
        const token = jwt.sign({ email: email }, `${process.env.SECRET}`, { expiresIn: "1d" });
        return res.json({ message: "user found", status: "200", token: token, id: user._id });
    } catch (err) {
        return res.json({ message: err.message, status: "error" });
    }
};

module.exports = { registerUser, loginUser };