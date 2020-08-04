import express, { Application } from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

export class Server {

    private App: Application

    constructor(private port: string | number) {
        this.App = express();
        this.Settings();
        this.Middlewares();
        this.Routes();
    }

    Settings() {
        this.App.set('port', this.port)
    }

    Middlewares() {
        this.App.use(express.json());
        this.App.use(morgan('dev'));
    }

    Routes() {
        this.App.use('/safecontacts/api/', authRoutes);
        this.App.use('/safecontacts/api/', userRoutes);
    }

    StartServer() {
        this.App.listen(this.App.get('port'));
        console.log('Everything OK');
    }
}