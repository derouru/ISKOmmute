import { expect, test } from '@playwright/test';
test('Submitting feedback form with feedback text but no rating', async ({ page }) => {
    // Navigate to the feedback page
    await page.goto('/feedback');

    // Fill in the textarea input with text
    await page.fill('#feedback-txtarea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

    // Submit the form
    await page.click('#submitBtn');

    // Wait for the alert dialog to appear
    page.on('dialog', async (myAlert) => 
    {
        // is an alert?
        expect(myAlert.type()).toContain("alert")
        // contains a certain text?
        expect(myAlert.message()).toContain("Feedback cannot be empty.")
        await myAlert.accept()
    })
    await page.waitForTimeout(3000);
});

test('Submitting feedback form with no feedback text and rating', async ({ page }) => {
    // Navigate to the feedback page
    await page.goto('/feedback');

    // Submit the form
    await page.click('#submitBtn');

    // Wait for the alert dialog to appear
    page.on('dialog', async (myAlert) => 
    {
        // is an alert?
        expect(myAlert.type()).toContain("alert")
        // contains a certain text?
        expect(myAlert.message()).toContain("Feedback cannot be empty.")
        await myAlert.accept()
    })
    await page.waitForTimeout(3000);
});

test('Submitting feedback form with feedback text and rating', async ({ page }) => {
    // Navigate to the feedback page
    await page.goto('/feedback');

    // Fill in the textarea input with text
    await page.fill('#feedback-txtarea', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    await page.click('#star5');
    
    // Submit the form
    await page.click('#submitBtn');

    // Wait for the alert dialog to appear
    page.on('dialog', async (myAlert) => 
    {
        // is an alert?
        expect(myAlert.type()).toContain("alert")
        // contains a certain text?
        expect(myAlert.message()).toContain("Thank you for your feedback! Your input is valuable to us.")
        await myAlert.accept()
    })
    await page.waitForTimeout(3000);
});