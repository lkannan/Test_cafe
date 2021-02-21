import { Selector } from 'testcafe'
import Navbar from '../page-objects/components/Navbar'
import FeedbackPage from '../page-objects/pages/FeedbackPage'

const navbar = new Navbar()
const feedbackPage = new FeedbackPage()

fixture`Feedback form submission test`
	.page`http://zero.webappsecurity.com/index.html`

test('submit feedback', async t => {
	await t.click(navbar.feedback)
	await feedbackPage.submitFeedback('name', 'email', 'subject', 'comment')
	feedbackPage.waitFor(1000)
	await t.expect(Selector('#feedback-title').exists).ok()
})
