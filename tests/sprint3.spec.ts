import { expect, test } from '@playwright/test';

test('Case: Destination reached successfully.', async ({ page }) => {
    await page.goto('/');

    // Select an option from the start dropdown menu
    await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });

    // Select an option from the destination dropdown menu
    await page.selectOption('#select-dest', { label: 'Institute of Environmental Science and Meterology' });

    // Click the "Generate Route" button
    await page.locator('button:text("Generate Route")').click(),

    // Click the "Done" button
    await page.locator('button:text("Done")').click();

    // Wait for some time to ensure all actions are completed
    await page.waitForTimeout(3000);
});