
import { Request, Response } from 'express';
import { Chat } from '../models/exlsheet'
import * as xlsx from 'xlsx';
import multer from 'multer';
const uploads = multer({ dest: 'uploads/' })
export const importChat = async (req: Request, res: Response) => {
    try {
        const file = req.file
        if (!file) {
            return res.status(400).json({ message: 'No file uploaded' })
        }
        const workbook = xlsx.readFile(file.path)
        const sheet = workbook.Sheets[workbook.SheetNames[0]]
        const data: Array<{ Message: string; UserId: string }> = xlsx.utils.sheet_to_json(sheet);
        const chatMessages = data.map(record => ({
            message: record['Message'],
            userId: record['UserId'],
        }));
        res.status(200).json({ Message: 'Chat imported successfully' })
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' })
    }
}