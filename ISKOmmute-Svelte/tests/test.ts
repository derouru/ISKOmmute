import { expect, test } from '@playwright/test';

// Comment out from example template
/*
test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
*/

test('Case: Press Generate Route only', async ({ page }) => {
  	await page.goto('/');

  	// Click the "Generate Route" button
 	await page.locator('button:text("Generate Route")').click();

  	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Please select both starting point and destination.")
		await myAlert.accept()
	})
});

test('Case: Choose start only', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#dropdown1', { label: 'Alumni Engineers Centennial Hall' });
  
	// Click the "Generate Route" button
	await page.locator('button:text("Generate Route")').click();
  
	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Please select both starting point and destination.")
		await myAlert.accept()
	})
});

test('Case: Choose destination only', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#dropdown2', { label: 'Alumni Engineers Centennial Hall' });
  
	// Click the "Generate Route" button
	await page.locator('button:text("Generate Route")').click();
  
	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Please select both starting point and destination.")
		await myAlert.accept()
	})
});

test('Case: Same start and destination', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#dropdown1', { label: 'Alumni Engineers Centennial Hall' });
	await page.selectOption('#dropdown2', { label: 'Alumni Engineers Centennial Hall' });
  
	// Click the "Generate Route" button
	await page.locator('button:text("Generate Route")').click();
  
	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Starting point and destination cannot be the same.")
		await myAlert.accept()
	})
});

test('Case: Different start and destination', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#dropdown1', { label: 'Alumni Engineers Centennial Hall' });
	await page.selectOption('#dropdown2', { label: 'Area 2' });
  
	// Click the "Generate Route" button
	await page.locator('button:text("Generate Route")').click();
  
	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Getting route from Alumni Engineers Centennial Hall to Area 2...")
		await myAlert.accept()
	})
});

