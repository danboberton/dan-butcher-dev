import { test, expect } from '@playwright/test'

test('should render the header and header should persist though scroll', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/')

  const header = page.getByTestId("header")
  // The new url should be "/about" (baseURL is used there)
  await expect(header).toBeInViewport()
  // The new page should contain an h1 with "About Page"
  await page.goto('/#connect')

  await expect(header).toBeInViewport()

});
