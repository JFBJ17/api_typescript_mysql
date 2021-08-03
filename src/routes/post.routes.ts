import { Router } from 'express';

const routes = Router();

import {getPosts, createPost, getPost, deletePost, updatePost} from '../controllers/post.controller'

routes.route('/')
    .get(getPosts)
    .post(createPost);

routes.route('/:idPost')
    .get(getPost)
    .delete(deletePost)
    .put(updatePost);

export default routes;