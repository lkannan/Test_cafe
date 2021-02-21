import { t } from 'testcafe'

export async function login(userBox, username, passwordBox, password) {
	await t
		.typeText(userBox, username)
		.typeText(passwordBox, password)
		.pressKey('enter')
}
