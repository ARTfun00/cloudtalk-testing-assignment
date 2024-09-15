import logger from './lib/logger';

// Main function to start the service
async function main() {
	try {
		console.log('Service started successfully');

		// long-lived service
		// eslint-disable-next-line no-constant-condition
		while (true) {
			console.log('Service is running');
			await new Promise((resolve) => setTimeout(resolve, 10000));
		}
	} catch (err) {
		console.error('Failed to start the service:', err);
	}
}

process.on('unhandledRejection', async (reason: Error) => {
	logger.error('Unhandled Promise Rejection: reason:', reason.message);
	logger.error(reason.stack);
	process.exit(1);
});

main();
