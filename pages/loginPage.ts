import { Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly userNameTextBox: Locator
  readonly passwordTextBox: Locator
  readonly loginBtn: Locator

  constructor(page: Page) {
    this.page = page
    this.userNameTextBox = page.locator('#user-name')
    this.passwordTextBox = page.locator('#password')
    this.loginBtn = page.locator('#login-button')
  }

  /**
   * @author Shubh Laxmi
   * @description This method is use to launch  apps url as per environment passed
   */
  async goto() {
    await this.page.goto(process.env.url!, { waitUntil: 'load' })
  }

  /**
   * @author Shubh Laxmi
   * @description This method is use to login Global Apps
   */
  async login() {
    await this.userNameTextBox.click()
    console.log('Enter User name')
    await this.userNameTextBox.fill(process.env.user!)
    await this.passwordTextBox.click()
    console.log('Enter password')
    await this.passwordTextBox.fill(process.env.password!)
    console.log('Clicking on SignIn Button')
    await this.loginBtn.click()
    console.log('Login Successful')
  }
}
