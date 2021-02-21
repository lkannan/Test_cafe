import Navbar from '../page-objects/components/Navbar'
import SearchResultsPage from '../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

fixture`Bank Search Box Test`.page`http://zero.webappsecurity.com/`

test('Search Box Test Case-1', async t => {
	// actions
	await navbar.search('online')
	await t
		.expect(searchResultsPage.searchResultText.innerText)
		.contains('Search Results:')
	await t
		.expect(searchResultsPage.resultLink.innerText)
		.contains('Zero - Free Access to Online Banking')
	await t.click(navbar.signinButton)
})
