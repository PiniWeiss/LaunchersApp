import User from "../models/user.model.js"
import jwt from "jsonwebtoken"

export const auth = (userTypes) => async (req, res, next) => {
    try {
        const token = req.cookies.jwt
        if (!token) {
            return res.status(401).json({ message: "Unauthorized - No Token Provided" })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({ message: "Unauthorized - Invalide Token" })
        }

        const user = await User.findById(decoded.userId)

        if (!user) {
            return res.status(404).json({ message: "User Not Found" })
        }

        if (!userTypes.includes(decoded.userType)) {
            return res.status(401).json({ message: `User Type: ${decoded.userType} are not authorize.` })
        }
        req.user = user
        next()

    } catch (error) {
res.status(401).json({message: error.message})
    }
}