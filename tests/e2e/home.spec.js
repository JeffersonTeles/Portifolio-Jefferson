import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Jefferson Teles/);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');
  
  // Test navigation to About section
  await page.click('text=Sobre');
  await expect(page.locator('#about')).toBeVisible();
  
  // Test navigation to Projects section
  await page.click('text=Projetos');
  await expect(page.locator('#projects')).toBeVisible();
});

test('CV download button is present', async ({ page }) => {
  await page.goto('/');
  const downloadButton = page.locator('text=Download CV');
  await expect(downloadButton).toBeVisible();
});

test('mobile menu works', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 375, height: 667 });
  
  const menuButton = page.locator('button[aria-label="Open menu"]');
  await menuButton.click();
  
  const mobileMenu = page.locator('.fixed.inset-0.z-\\[60\\]');
  await expect(mobileMenu).toBeVisible();
});

test('search functionality works', async ({ page }) => {
  await page.goto('/');
  
  // Open search with keyboard shortcut
  await page.keyboard.press('Meta+K');
  
  const searchModal = page.locator('.fixed.inset-0.z-\\[100\\]');
  await expect(searchModal).toBeVisible();
  
  // Type search query
  await page.fill('input[placeholder*="Buscar"]', 'React');
  
  // Verify search results appear
  const searchResults = page.locator('text=React');
  await expect(searchResults).toBeVisible();
});
