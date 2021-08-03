import {Request, Response} from 'express'

export function indexWelcome(req: Request, res: Response): Response {
    return res.send('Welcome to my new API');
}