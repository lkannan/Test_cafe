import { Selector } from 'testcafe'
import xPathToCss from 'xpath-to-css'

fixture`Bank Search Box Test`.page`http://zero.webappsecurity.com/`

test('Search Box Test Case-1', async t => {
	// selectors
	const searchInput = Selector('#searchTerm')
	const searchResultText = Selector('h2')
	const resultLink = Selector('div.top_offset')

	// Xpath to css Example
	const xPath = `'//*[@id="searchTerm"]'`
	const css = xPathToCss(xPath)

	// actions
	await t
		.typeText(xPathToCss('//*[@id="searchTerm"]'), 'online')
		.pressKey('enter')
	// assertions
	await t.expect(searchResultText.innerText).contains('Search Results:')
	await t
		.expect(resultLink.innerText)
		.contains('Zero - Free Access to Online Banking')
})
