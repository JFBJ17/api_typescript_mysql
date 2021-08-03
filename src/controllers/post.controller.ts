import {Request, Response} from 'express';
import { connect } from '../database'

interface Post {
    id?: string,
    title: string,
    description: string,
    image_url: string,
    create_at: Date
}

export async function getPosts(req: Request, res: Response): Promise<Response> {
    const conn = await connect();
    const posts = await conn.query('SELECT * FROM posts');
    return res.json(posts[0]);
}

export async function createPost(req: Request, res: Response): Promise<Response> {
    const newPost: Post = req.body;
    const conn = await connect();
    await conn.query('INSERT INTO posts SET ?', [newPost]);
    return res.send('Post created');
}

export async function getPost(req: Request, res: Response): Promise<Response> {
    const id = req.params.idPost;
    const conn = await connect();
    const post = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
    return res.json(post[0]);
}

export async function deletePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.idPost;
    const conn = await connect();
    await conn.query('DELETE FROM posts WHERE id = ?', [id]);
    return res.send('Post deleted');
}

export async function updatePost(req: Request, res: Response): Promise<Response> {
    const id = req.params.idPost;
    const post: Post = req.body;
    const conn = await connect();
    await conn.query('UPDATE posts SET ? WHERE id = ?', [post, id]);
    return res.send('Post updated');
}