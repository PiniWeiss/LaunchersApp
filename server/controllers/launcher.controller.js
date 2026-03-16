import Launcher from "../models/db.model.js";

export const getLaunchers = async(req, res) => {
    try {
        const launchers = await Launcher.find()
        return res.status(200).json({message:'get user info succrssfully', data: launchers})

    } catch (error) {
        console.log('Error in get self info controller', error.message);
        return res.status(500).json({message: 'Internal server error '});
    }
}

