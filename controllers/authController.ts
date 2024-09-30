import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user'
export const registerUser = async (req: Request, res: Response) => {
    const { name, email, password } = req.body;
    try {
        const existUser = await User.findOne({ where: { email } })
        if (existUser) {
            return res.json({ Error: 'User already registerd' });
        }
        const hashedPass = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPass });
        res.status(200).json({ Message: 'User registerd successfully' })
    }
    catch (error) {
        return res.status(500).json({ Error: 'Internal servor error' });
    }
}
export const loginUser = async (req: Request, res: Response) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.json({ Error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return res.json({ Error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' })
        res
    } catch (error) {
        return res.status(500).json({ Error: 'Internal servor error' });
    }
}
