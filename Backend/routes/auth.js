import express from "express";
import User from "../models/User.js";
import { body, check, validationResult } from 'express-validator';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import fetchUser from "../middleware/fetchUser.js";

const auth = express.Router();
const JWT_SECRET = "AdhikarJWTToken";
//ROUTE 1: Create a User using : POST "api/auth/createuser" . doesn't require login

auth.post('/createuser', [
    body('name', 'Enter a vaild name').isLength({ min: 2 }),
    body('email', 'Enter a vaild email').isEmail(),
    body('password', 'password must be atleast 5 characters').isLength({ min: 6 }),
], async (req, res) => {

    //if there are errors , return bad request adn the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check whether the user with this email exists already
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" })
        }

        const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPassword,
        })

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        // console.log(jwtData);

        res.json({success:true, authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }

})


//ROUTE 2: Authentucate a User using : POST "api/auth/login" . No login required

auth.post('/login', [
    body('email', 'Enter a vaild email').isEmail(),
    body('password', 'password cannot be blank').exists(),
], async (req, res) => {
    //if there are errors , return bad request adn the errors 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: "Please try to login with correct credentials" });
    }

    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "Please try to login with correct credentials" });
        }

        const data = {
            user: {
                id: user.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET)
        res.json({ success:true ,authToken })
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }
});

//ROUTE 3: Get loggedin user details : POST "api/auth/getuser" . Login required
auth.post('/getuser', fetchUser , async (req, res) => {
    try {
       const userId = req.user.id;
       const user = await User.findById(userId).select("-password");
       res.send(user)
    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal Server Error")
    }

})


export default auth;