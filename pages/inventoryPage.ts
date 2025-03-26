import { Page, Locator, expect } from '@playwright/test'

export class InventoryPage {
  readonly page: Page
  readonly inventoryAppLogo: Locator

  constructor(page: Page) {
    this.page = page
    this.inventoryAppLogo = page.locator('.app_logo')
  }

  /**
   * @author Shubh Laxmi
   * @description This method is use to verify home page logo
   */
  async verifyAppLogo() {
    await expect(this.inventoryAppLogo).toBeVisible()
  }
}
