import { Requst, Response } from 'express'
import { Task } from '../models/taskFil';
import { where } from 'sequelize';
export const getTasks = async (req: Requst, res: Response) => {
    const { filter } = req.query;
    try {
        const whereClause: any = {}
        if (filter === 'completed') {
            whereClause.status = 'completed'
        } else if (filter === 'pending') {
            whereClause.status = 'pendung'
        }
        const tasks = await Task.findAll({ where: whereClause })
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}
