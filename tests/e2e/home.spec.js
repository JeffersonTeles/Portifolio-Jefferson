import { test, expect } from '@playwright/test';

test('homepage loads successfully', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Jefferson Teles/);
});

test('navigation works correctly', async ({ page }) => {
  await page.goto('/');

  await page.click('text=Sobre');
  await expect(page.locator('#about')).toBeVisible();

  await page.click('text=Experiência');
  await expect(page.locator('#experience')).toBeVisible();

  await page.click('text=Projetos');
  await expect(page.locator('#projects')).toBeVisible();
});

test('CV download button is present', async ({ page }) => {
  await page.goto('/');
  const resumeLink = page.getByRole('link', { name: /ver currículo/i });
  await expect(resumeLink).toBeVisible();
  await expect(resumeLink).toHaveAttribute('href', '/curriculo.pdf');
});

test('mobile menu works', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 375, height: 667 });
  
  const menuButton = page.locator('button[aria-label="Abrir menu"]');
  await menuButton.click();
  
  const mobileMenu = page.locator('#mobile-menu');
  await expect(mobileMenu).toBeVisible();
});

test('hero CTA links are present', async ({ page }) => {
  await page.goto('/');

  const hero = page.locator('#hero');
  await expect(page.getByRole('link', { name: /ver projetos/i })).toBeVisible();
  await expect(hero.getByText('GitHub', { exact: true })).toBeVisible();
  await expect(hero.getByText('WhatsApp', { exact: true })).toBeVisible();
});

test('project cards are displayed', async ({ page }) => {
  await page.goto('/');

  // Scroll to projects section
  await page.locator('#projects').scrollIntoViewIfNeeded();

  await expect(page.getByRole('heading', { name: /Maestria Docente/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Casamento/i })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Interface X11/i })).toBeVisible();
});

test('contact modal opens and validates form', async ({ page }) => {
  await page.goto('/');

  // Scroll to contact section
  await page.locator('#contact').scrollIntoViewIfNeeded();

  // Click contact button
  const contactButton = page.getByRole('button', { name: /enviar mensagem/i });
  await contactButton.click();

  // Wait for modal to appear
  const modal = page.locator('.fixed.inset-0.z-\\[400\\]');
  await expect(modal).toBeVisible();

  // Try to submit empty form
  const submitButton = page.locator('button[type="submit"]');
  await submitButton.click();

  // Verify validation errors appear
  const nameInput = page.locator('input[name="from_name"]');
  await expect(nameInput).toHaveAttribute('aria-invalid', 'true');

  // Close modal
  const closeButton = page.locator('button[aria-label="Fechar modal"], button[aria-label="Close modal"]');
  await closeButton.click();
  await expect(modal).not.toBeVisible();
});
