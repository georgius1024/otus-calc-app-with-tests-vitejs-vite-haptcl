import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://127.0.0.1:5173/');
  await expect(page.getByTestId('display')).toContainText('0');
  await page.getByTestId('btn-2').click();
  await page.getByTestId('btn-*').click();
  await page.getByTestId('btn-2').click();
  await page.getByTestId('btn-=').click();
  await expect(page.getByTestId('display')).toContainText('4');
});