import { Selector, t } from 'testcafe'
import BasePage from './BasePage'

class FeedbackPage extends BasePage {
	constructor() {
		super()
		this.name = Selector('#name')
		this.email = Selector('#email')
		this.subject = Selector('#subject')
		this.comment = Selector('#comment')
		this.submitBtn = Selector('[name="submit"]')
	}
	async submitFeedback(name, email, subject, comment) {
		await t
			.typeText(this.name, name)
			.typeText(this.email, email)
			.typeText(this.subject, subject)
			.typeText(this.comment, comment)
			.click(this.submitBtn)
	}
}

export default FeedbackPage
