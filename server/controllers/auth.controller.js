import User from "../models/user.model.js"
import { generateTokenToCookies } from "../utils/generateToken.js"

export const registerUser = async (req, res) => {
    try {
        const { userName, password, userType, email } = req.body
        if (!userName || !password || !userType || !email) {
            res.status(400).json({ message: "One of the field missing" })
        }

        const existingUser = await User.find({ userName })
        if (existingUser._id) {
            res.status(400).json({ message: "User with this userName already exist." })
        }

        const newUser = new User({
            userName, password, userType, email
        })
        await newUser.save()

        res.status(201).json({ message: "user created successfuly!", data: newUser })
    } catch (error) {
        console.log('Error in registerUser controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const login = async (req, res) => {
    try {
        const { userName, password } = req.body
        if (!userName || !password) {
            res.status(400).json({ message: "One of the field missing" })
        }
        const user = await User.findOne({ userName })
        if (!user) {
            res.status(404).json({ message: " User not found" })
        }

        await User.findByIdAndUpdate(user._id, { $set: { lastLogin: Date.now() } })

        generateTokenToCookies(user._id, user.userType, res)

        res.status(201).json({ message: "user loged in successfuly!", data: user })
    } catch (error) {
        console.log('Error in login controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const updateUser = async (req, res) => {
    try {
        const { id, userName, userType, password, email } = req.body

        if (!id) {
            res.status(401).json({ message: " Id not provided" })
        }


        const updatedUser = await User.findByIdAndUpdate(id, { $set: { userType, password, email } })
        if (!updatedUser) {
            res.status(404).json({ message: " User not found" })
        }
        const user = await User.findById(id)

        res.status(201).json({ message: "user updated in successfuly!", data: user })
    } catch (error) {
        console.log('Error in updateuser controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const userToDelete = await User.findById(id)
        if (!userToDelete) {
            res.status(404).json({ message: "User not found" })
        }
        await User.findByIdAndDelete(id)

        res.status(204).json({ message: "user deleted in successfuly!" })
    } catch (error) {
        console.log('Error in deleteUser controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const getConnectedUser = async (req, res) => {
    try {
        const { id } = req.user
        const user = await User.findById(id)
        if (!user) {
            res.status(404).json({ message: "User not found" })
        }

        res.status(200).json({ message: "success", data: user })
    } catch (error) {
        console.log('Error in getConnectedUser controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const getAllUsers = async (req, res) => {
    try {

        const users = await User.find()
        res.status(200).json({ message: "success", data: users })
    } catch (error) {
        console.log('Error in getAllUsers controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });
        
    }
}

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0})
        res.status(200).json({message: "logged out successfuly."})
    } catch (error) {
        console.log('Error in logout controller:', error.message);
        return res.status(500).json({ message: 'Internal server error ' });
        
    }
}