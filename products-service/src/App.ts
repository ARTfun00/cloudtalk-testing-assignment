import 'dotenv/config';

import addErrorHandler from './middleware/error-handler';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import http from 'http';
import registerRoutes from './routes';

export default class App {
	public express: express.Application;

	public httpServer: http.Server;

	public async init(): Promise<void> {
		const { NODE_ENV } = process.env;
		this.express = express();
		this.httpServer = http.createServer(this.express);

		// add all global middleware like cors
		this.middleware();

		// // register the all routes
		this.routes();

		// add the middleware to handle error, make sure to add if after registering routes method
		this.express.use(addErrorHandler);

		if (NODE_ENV && NODE_ENV !== 'prod') {
			// setup swagger docs or Clinic.js here
		}
	}

	/**
	 * here register your all routes
	 */
	private routes(): void {
		this.express.get('/', this.basePathRoute);
		this.express.get('/web', this.parseRequestHeader, this.basePathRoute);
		this.express.use('/', registerRoutes());
	}

	/**
	 * here you can apply your middlewares
	 */
	private middleware(): void {
		// support application/json type post data
		// support application/x-www-form-urlencoded post data
		// Helmet can help protect your app from some well-known web vulnerabilities by setting HTTP headers appropriately.
		this.express.use(helmet({ contentSecurityPolicy: false }));
		this.express.use(express.json({ limit: '100mb' }));
		this.express.use(
			express.urlencoded({ limit: '100mb', extended: true }),
		);
		// add multiple cors options as per your use
		const corsOptions = {
			origin: [
				'http://localhost:8080/',
				'http://127.0.0.1:8080',
			],
		};
		this.express.use(cors(corsOptions));
	}

	private parseRequestHeader(
		req: express.Request,
		res: express.Response,
		// eslint-disable-next-line @typescript-eslint/ban-types
		next: Function,
	): void {
		// parse request header
		// console.log(req.headers.access_token);
		next();
	}

	private basePathRoute(
		request: express.Request,
		response: express.Response,
	): void {
		response.json({ message: 'Success! Base path route of "Products service".' });
	}
}
