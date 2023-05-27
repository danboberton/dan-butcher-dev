import { test, expect } from '@playwright/test'

test('should render the header and header should persist though scroll', async ({ page }) => {
  await page.goto('/')
  const header = page.getByTestId('header')

  await expect(header).toBeInViewport()
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(header).toBeInViewport()
});
