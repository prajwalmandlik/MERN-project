import express from "express";
import User from "../models/User.js";
import { body, check, validationResult } from 'express-validator';

const auth = express.Router();

// Create a User using : POST "api/auth" . doesn't require auth

auth.post('/', [
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
        let user = await User.findOne({email: req.body.email});
    if(user){
        return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

     user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
    res.send("users created")
    } catch (error) {
        console.log(error.message)
        res.status(500).send("some error occured")
    }
    
})

export default auth;