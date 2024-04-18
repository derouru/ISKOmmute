import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	// Run tests in serial
	fullyParallel: false,

	// Reporter in html
	reporter: [['html', { outputFolder: 'playwright-report' }]],
	
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
};

export default config;
