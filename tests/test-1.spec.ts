import { test } from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { InventoryPage } from '../pages/inventoryPage'

test('@test', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const inventoryPage = new InventoryPage(page)
  await loginPage.goto()
  await loginPage.login()
  await inventoryPage.verifyAppLogo()
})
