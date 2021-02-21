import { Selector, selector } from 'testcafe'
import { login } from '../helper'

//prettier-ignore
fixture`login test`
	.page`https://www.saucedemo.com/`

test('User locked out', async t => {
	const error_text = Selector("[data-test='error']")
	await login('#user-name', 'locked_out_user', '#password', 'secret_sauce')
	await t.expect(error_text.innerText).contains('locked')
})

test('User login with valid credentials', async t => {
	const banner_text = Selector('div.product_label').innerText
	await login('#user-name', 'standard_user', '#password', 'secret_sauce')
	await t.expect(banner_text).contains('Products')
})
