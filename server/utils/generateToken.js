import jwt from "jsonwebtoken"

export const generateTokenToCookies = (userId, userType, res) => {
    const token = jwt.sign({ userId, userType }, process.env.JWT_SECRET, {
        expiresIn: "1d"
    })
    res.cookie("jwt", token, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
    })
}