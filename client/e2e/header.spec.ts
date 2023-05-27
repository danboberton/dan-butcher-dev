import { test, expect } from '@playwright/test'

test('should render the header and header should persist though scroll', async ({ page }) => {
  await page.goto('/')
  const header = page.getByTestId('header')

  await expect(header).toBeInViewport()
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await expect(header).toBeInViewport()
});

test('hamburger menu should render for mobile', async ({page, isMobile}) =>{
  await page.goto('/')
  const hamburgerButton = page.getByTestId('hamburger-button')
  const sidebar = page.getByTestId('sidebar')

  // Make sure hamburger button on mobile
  if (isMobile){
    await expect(hamburgerButton).toBeInViewport()
    // Make sure sidebar begins hidden
    await expect(sidebar).toBeHidden()
    // Scroll to bottom of page to ensure fixed position of sidebar renders
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await hamburgerButton.click()
    await expect(sidebar).not.toBeHidden()
    // Click nav button to make sure nav bar goes away
    const aboutButton = page.getByTestId('About-button')
    await aboutButton.click()
    await expect(sidebar).toBeHidden()
  } else {
    await expect(hamburgerButton).not.toBeInViewport()
  }
})
