import jwt from "jsonwebtoken";
import User from "../models/user";
const secret = "test";

const auth = async(req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, secret)

            req.user = await User.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
};

const admin = (req, res, next) => {
    if (req.user && req.user.role === 3) {
        console.log(req);
        next()
        res.send("you're user")
    } else {
        res.status(401)
        res.send("Not authorized as an admin")
    }
}
const organizer = (req, res, next) => {
    if (req.user && req.user.role === 1) {
        next()
    } else {
        res.status(401)
        res.send("Not authorized as an admin")
    }
}
const user = (req, res, next) => {
    if (req.user && req.user.role === 0) {
        next()
    } else {
        res.status(401)
        res.send("Not authorized as an admin")
    }
}


export default { auth, admin, moderator, organizer, user };