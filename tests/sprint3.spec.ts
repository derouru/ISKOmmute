import { expect, test } from '@playwright/test';

test('Case: Destination reached successfully.', async ({ page }) => {
    await page.goto('/');

    // Select an option from the start dropdown menu
    await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });

    // Select an option from the destination dropdown menu
    await page.selectOption('#select-dest', { label: 'Institute of Environmental Science and Meterology' });

    // Click the "Generate Route" button
    await page.locator('button:text("Generate Route")').click(),

    // Add waiting time
    await page.waitForTimeout(3000); // waits for 3 seconds

    // Click the "Back" button
    await page.locator('#back_button').click();

    // Wait for some time to ensure all actions are completed
    await page.waitForTimeout(3000);
});