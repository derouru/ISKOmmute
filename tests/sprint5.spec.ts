import { expect, test } from '@playwright/test';

test('Case: More information on route was displayed successfully.', async ({ page }) => {
    await page.goto('/');

    // Select an option from the start dropdown menu
    await page.selectOption('#select-start', { label: 'Alumni Engineers Centennial Hall' });

    // Select an option from the destination dropdown menu
    await page.selectOption('#select-dest', { label: 'Institute of Environmental Science and Meterology' });

    // Click the "Generate Route" button
    await page.locator('button:text("Generate Route")').click(),

    // Add waiting time
    await page.waitForTimeout(5000); // waits for 5 seconds

    // Check that the <div> for estimated time of arrival is displayed
    await expect(page.locator('#instructions')).toContainText("ETA");

    // Wait for some time to ensure all actions are completed
    await page.waitForTimeout(3000);
});

test('Case: More information on start and destination location was displayed successfully', async ({ page }) => {
    await page.goto('/');
    await page.locator('#select-start').selectOption('AECH');
    await page.locator('#select-dest').selectOption('EEEI');
    page.once('dialog', dialog => {
        console.log(`Dialog message: ${dialog.message()}`);
        dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Generate Route' }).click();
    await page.waitForTimeout(5000);
    await page.getByLabel('Map', { exact: true }).click({
        position: {
        x: 639,
        y: 359
        }
    });
    await expect(page.getByText('Alumni Engineers Centennial HallAlso known as AECH, this is the current home of')).toBeVisible();
    await page.getByLabel('Close popup').click();
    await page.getByLabel('Map', { exact: true }).click({
        position: {
        x: 578,
        y: 192
        }
    });
    await expect(page.getByText('Electrical and Electronics Engineering InstituteEEEI; It is an institution for')).toBeVisible();
    await page.getByLabel('Close popup').click();
});

test('Case: Commuting route was changed successfully', async ({ page }) => {
    await page.goto('/');
    await page.locator('#select-start').selectOption('CAL');
    await page.locator('#select-dest').selectOption('Church of the Risen Lord');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Generate Route' }).click();
    await page.waitForTimeout(5000);
    await page.getByRole('button', { name: '<' }).click();
    await page.locator('#select-start').selectOption('A2');
    await page.locator('#select-dest').selectOption('Church of the Risen Lord');
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('button', { name: 'Generate Route' }).click();
    await page.waitForTimeout(5000);
  });