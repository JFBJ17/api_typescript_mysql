import express, { Application } from 'express';
import morgan from 'morgan'

// Routes
import indexRoutes from './routes/index.routes';
import postRoutes from './routes/post.routes';

export default class App {

    private app: Application;

    constructor(private port?: number | string){
        this.app = express();
        this.settings();
        this.middleware();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/post', postRoutes);
    }

    middleware() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('Server on port', this.app.get('port'));
    }
}