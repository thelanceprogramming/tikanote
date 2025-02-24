import { Request, Response } from "express";
import User from '../services/UserService';

export const index = async(req: Request, res: Response) => {
    try {
        const users = await User.getAllUsers();
        res.json(users);
    } catch (error) {
        console.error("Error fetching users: ", error);
        res.status(500)
            .json(
                {
                    message: "Internal server error."
                }
            );
    }
}