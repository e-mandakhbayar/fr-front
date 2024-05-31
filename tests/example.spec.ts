import { test, expect } from '@playwright/test'

test('title check', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.getByText('Check out create-vue, the').click();
})