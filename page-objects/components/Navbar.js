import { Selector, t } from 'testcafe'

class Navbar {
	constructor() {
		// Selectors
		this.searchInput = Selector('#searchTerm')
		this.signinButton = Selector('#signin_button')
		this.feedback = Selector('#feedback')
	}

	async search(searchText) {
		await t.typeText(this.searchInput, searchText).pressKey('enter')
	}
}

export default Navbar
