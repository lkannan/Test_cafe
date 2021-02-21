import { Selector, t } from 'testcafe'

class BasePage {
	async waitFor(milliseconds) {
		await t.wait(milliseconds)
	}
	async setTestSpeed(factor) {
		await t.setTestSpeed(factor)
	}
}

export default BasePage
