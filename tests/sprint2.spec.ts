import { expect, test } from '@playwright/test';

test('Invalid: Start and/or destination location were not supplied', async ({ page }) => {
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
	await page.waitForTimeout(3000);
});

test('Start location was successfully chosen', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('#select-start', {
        label: "Alumni Engineers Centennial Hall"
    });

    await page.waitForTimeout(3000);
});

test('Destination location was successfully chosen', async ({ page }) => {
    await page.goto('/');
    await page.selectOption('#select-dest', {
        label: "Alumni Engineers Centennial Hall"
    });

    await page.waitForTimeout(3000);
});

test('Case: Choose start only', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });
  
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
	await page.waitForTimeout(3000);
});

test('Case: Choose destination only', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#select-dest', { label: 'Alumni Engineers Centennial Hall' });
  
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
	await page.waitForTimeout(3000);
});

test('Case: Same start and destination', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });
	await page.selectOption('#select-dest', { label: 'Alumni Engineers Centennial Hall' });
  
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
	await page.waitForTimeout(3000);
});

test('Case: Different start and destination', async ({ page }) => {
	await page.goto('/');
  
	// Select an option from the first dropdown menu ONLY
	await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });
	await page.selectOption('#select-dest', { label: 'Institute of Mathematics' });
  
	// Click the "Generate Route" button
	await page.locator('button:text("Generate Route")').click();
  
	// Check if popup dialog 
	page.on('dialog', async (myAlert) => 
	{
		// is an alert?
		expect(myAlert.type()).toContain("alert")
		// contains a certain text?
		expect(myAlert.message()).toContain("Getting route from AECH to IMath...")
		await myAlert.accept()
	})
	await page.waitForTimeout(3000);
});

