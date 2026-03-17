import Launcher from "../models/launcher.model.js";

export const getLaunchers = async (req, res) => {
    try {
        const launchers = await Launcher.find()
        return res.status(200).json({ message: 'get Launchers succrssfully', data: launchers })

    } catch (error) {
        console.log('Error in getLauncher controller', error.message);
        return res.status(500).json({ message: 'Internal server error ' });
    }
}

export const createLauncher = async (req, res) => {
    try {
        const { name, city, rocketType, latitude, longitude } = req.body
        if (!name, !city, !rocketType, !latitude, !longitude) res.status(401).json({ message: "One of the feilds is missing" })
        const newLauncher = await new Launcher({
            name,
            city,
            rocketType,
            latitude,
            longitude
        })
        newLauncher.save()
        return res.status(200).json({ message: 'create launcher successfully', data: newLauncher })
    } catch (error) {
        console.log('Error in createLauncher controller', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}

export const deleteLauncher = async (req, res) => {
    try {
        const { id } = req.params

        const LauncherToDelete = await Launcher.findByIdAndDelete(id)
        return res.status(201).json({ message: 'launcher deleted successfully' })
    } catch (error) {
        console.log('Error in deleteLauncher controller', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}


export const getLauncherById = async (req, res) => {
    try {
        const { id } = req.params

        const launcher = await Launcher.findById(id)
        if (!launcher) res.status(404).json({ message: "Launcher not found." })
        res.status(200).json({ message: "launcher found successfully", data: launcher })
    } catch (error) {
        console.log('Error in getLauncherById controller', error.message);
        return res.status(500).json({ message: 'Internal server error ' });

    }
}